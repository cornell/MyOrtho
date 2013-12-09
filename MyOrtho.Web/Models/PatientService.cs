using System;
using System.Collections.Generic;

namespace MyOrtho.Web.Models
{
    public class PatientService
    {
        private readonly PatientRepository _repository;

        public PatientService()
        {
            _repository = new PatientRepository();
        }

        public List<PatientView> GetPatients()
        {
            var models = _repository.FindAll();

            var viewModels = new List<PatientView>();
            foreach (Patient model in models)
            {
                var viewModel = new PatientView(model);
                viewModels.Add(viewModel);
            }
            return viewModels;
        }

        public Patient GetPatient(int id)
        {
            var patient = _repository.FindById(id);
            return patient;
        }

        public int AddPatient(Patient patient)
        {
            var result = _repository.Insert(patient);
            return result.Id;
        }

        public void UpdatePatient(Patient patient)
        {
            _repository.Update(patient);
        }

        public void DeletePatient(int id)
        {
            _repository.Delete(id);
        }
    }
}