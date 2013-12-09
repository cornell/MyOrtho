using System;

namespace MyOrtho.Web.Models
{
    public class Patient
    {
        public long Id { get; set; }
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Commentaire { get; set; }
        public string Telephone { get; set; }
        public long IdOrigineDemande { get; set; }
        public long IdDomaineIntervention { get; set; }
        public string EtatBilan { get; set; }
        public DateTime? DateBilan { get; set; }
        public DateTime? DateDemandeBilan { get; set; }
        public string Disponibilite { get; set; }
    }
}