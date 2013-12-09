using System.Web.Http;
using MyOrtho.Web.Models;

namespace MyOrtho.Web.Controllers
{
    public class PatientsController : ApiController
    {
        private readonly PatientService _service;

        public PatientsController()
        {
            _service = new PatientService();
        }

        // GET api/values
        public dynamic Get()
        {
            var patients = _service.GetPatients();
            return patients;
        }

        public dynamic Get(int id)
        {
            var patient = _service.GetPatient(id);
            return patient;
        }

        // POST api/values
        public long Post(Patient patient)
        {
            return _service.AddPatient(patient);
        }

        // PUT api/values/5
        public void Put(Patient patient)
        {
            _service.UpdatePatient(patient);
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            _service.DeletePatient(id);
        }
    }
}