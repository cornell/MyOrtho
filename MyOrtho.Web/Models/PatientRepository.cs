using System.Collections.Generic;
using Simple.Data;

namespace MyOrtho.Web.Models
{
    public class PatientRepository : IRepository
    {
        public List<Patient> FindAll()
        {
            var db = Database.Open();
            return db.Patients.All();
        }

        public Patient FindById(int id)
        {
            var db = Database.Open();
            return db.Patients.FindById(id);
        }

        public dynamic Insert(Patient patient)
        {
            var db = Database.Open();
            return db.Patients.Insert(patient);
        }

        public dynamic Update(Patient patient)
        {
            var db = Database.Open();
            return db.Patients.Update(patient);
        }

        public void Delete(int id)
        {
            var db = Database.Open();
            db.Patients.DeleteById(id);
        }
    }

    public interface IRepository
    {

    }
}