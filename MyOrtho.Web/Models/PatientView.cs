using System;
using System.Globalization;

namespace MyOrtho.Web.Models
{
    public class PatientView
    {
        private readonly Patient _model;

        public PatientView(Patient model)
        {
            _model = model;
            Id = model.Id;
            Nom = model.Nom;
            Prenom = model.Prenom;
            Commentaire = model.Commentaire ;
            Telephone = model.Telephone;
            OrigineDemande = GetOrigineDemande();
            DomaineIntervention = GetDomaineIntervention();
            EtatBilan = model.EtatBilan;
            DateBilan = model.DateBilan ?? new DateTime();//(model.DateBilan == null) ? "" : model.DateBilan.Value.ToString("g", new CultureInfo("fr-FR"));
            DateDemandeBilan = model.DateDemandeBilan ?? new DateTime();//(model.DateDemandeBilan == null) ? "" : model.DateDemandeBilan.Value.ToString("g", new CultureInfo("fr-FR"));
        }

        public string GetDomaineIntervention()
        {
            if (_model.IdDomaineIntervention == (int) Models.DomaineIntervention.Deglutition)
            {
                return "Déglutition";
            }
            if (_model.IdDomaineIntervention == (int) Models.DomaineIntervention.LangageOral)
            {
                return "Langage oral";
            }
            if (_model.IdDomaineIntervention == (int) Models.DomaineIntervention.Neurologie)
            {
                return "Neurologie";
            }
            return "";
        }

        public string GetOrigineDemande()
        {
            if (_model.IdOrigineDemande == (int) Models.OrigineDemande.Instituteur)
            {
                return "Instituteur";
            }
            if (_model.IdOrigineDemande == (int) Models.OrigineDemande.Medecin)
            {
                return "Médecin";
            }
            if (_model.IdOrigineDemande == (int) Models.OrigineDemande.Autres)
            {
                return "Autres";
            }
            return "";
        }

        public long Id { get; set; }
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Commentaire { get; set; }
        public string Telephone { get; set; }
        public string OrigineDemande { get; set; }
        public string DomaineIntervention { get; set; }
        public string EtatBilan { get; set; }
        public DateTime DateBilan { get; set; }
        public DateTime DateDemandeBilan { get; set; }
    }
}