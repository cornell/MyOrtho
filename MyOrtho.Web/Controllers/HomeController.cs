using System.Configuration;
using System.Data.SqlClient;
using System.Web.Mvc;
using System.Collections.Generic;
using MyOrtho.Web.Models;
using Simple.Data;
using Simple.Data.Ado;
using StackExchange.Profiling;
using StackExchange.Profiling.Data;

namespace MyOrtho.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            string connectionString = ConfigurationManager.ConnectionStrings["Simple.Data.Properties.Settings.DefaultConnectionString"].ToString();
            var db = Database.OpenConnection(connectionString);
            List<Patient> patients;
            using (var rawCnn = new SqlConnection(connectionString))
            {
                using (var profiledCnn = new ProfiledDbConnection(rawCnn, MiniProfiler.Current))
                {
                    profiledCnn.Open();
                    ((AdoAdapter)db.GetAdapter()).UseSharedConnection(profiledCnn);
                    patients = db.Patients.All();
                    ((AdoAdapter)db.GetAdapter()).StopUsingSharedConnection();
                }
            }
            //var db = Database.Open();
            //List<PatientCommand> patients = db.Patients.All();

            //string connectionString = ConfigurationManager.ConnectionStrings["Simple.Data.Properties.Settings.DefaultConnectionString"].ToString();
            //MyOrthoEntities en = new MyOrthoEntities();
            

            return View(patients);
        }
    }    
}
