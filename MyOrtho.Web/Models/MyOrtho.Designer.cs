﻿//------------------------------------------------------------------------------
// <auto-generated>
//    Ce code a été généré à partir d'un modèle.
//
//    Des modifications manuelles apportées à ce fichier peuvent conduire à un comportement inattendu de votre application.
//    Les modifications manuelles apportées à ce fichier sont remplacées si le code est régénéré.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.ComponentModel;
using System.Data.EntityClient;
using System.Data.Objects;
using System.Data.Objects.DataClasses;
using System.Linq;
using System.Runtime.Serialization;
using System.Xml.Serialization;

[assembly: EdmSchemaAttribute()]
namespace MyOrtho.Web.Models
{
    #region Contextes
    
    /// <summary>
    /// Aucune documentation sur les métadonnées n'est disponible.
    /// </summary>
    public partial class MyOrthoEntities : ObjectContext
    {
        #region Constructeurs
    
        /// <summary>
        /// Initialise un nouvel objet MyOrthoEntities à l'aide de la chaîne de connexion trouvée dans la section 'MyOrthoEntities' du fichier de configuration d'application.
        /// </summary>
        public MyOrthoEntities() : base("name=MyOrthoEntities", "MyOrthoEntities")
        {
            this.ContextOptions.LazyLoadingEnabled = true;
            OnContextCreated();
        }
    
        /// <summary>
        /// Initialisez un nouvel objet MyOrthoEntities.
        /// </summary>
        public MyOrthoEntities(string connectionString) : base(connectionString, "MyOrthoEntities")
        {
            this.ContextOptions.LazyLoadingEnabled = true;
            OnContextCreated();
        }
    
        /// <summary>
        /// Initialisez un nouvel objet MyOrthoEntities.
        /// </summary>
        public MyOrthoEntities(EntityConnection connection) : base(connection, "MyOrthoEntities")
        {
            this.ContextOptions.LazyLoadingEnabled = true;
            OnContextCreated();
        }
    
        #endregion
    
        #region Méthodes partielles
    
        partial void OnContextCreated();
    
        #endregion
    
        #region Propriétés ObjectSet
    
        /// <summary>
        /// Aucune documentation sur les métadonnées n'est disponible.
        /// </summary>
        public ObjectSet<Patients> Patients
        {
            get
            {
                if ((_Patients == null))
                {
                    _Patients = base.CreateObjectSet<Patients>("Patients");
                }
                return _Patients;
            }
        }
        private ObjectSet<Patients> _Patients;

        #endregion

        #region Méthodes AddTo
    
        /// <summary>
        /// Méthode déconseillée pour ajouter un nouvel objet à l'EntitySet Patients. Utilisez la méthode .Add de la propriété ObjectSet&lt;T&gt; associée à la place.
        /// </summary>
        public void AddToPatients(Patients patients)
        {
            base.AddObject("Patients", patients);
        }

        #endregion

    }

    #endregion

    #region Entités
    
    /// <summary>
    /// Aucune documentation sur les métadonnées n'est disponible.
    /// </summary>
    [EdmEntityTypeAttribute(NamespaceName="MyOrthoModel", Name="Patients")]
    [Serializable()]
    [DataContractAttribute(IsReference=true)]
    public partial class Patients : EntityObject
    {
        #region Méthode de fabrique
    
        /// <summary>
        /// Créez un nouvel objet Patients.
        /// </summary>
        /// <param name="id">Valeur initiale de la propriété Id.</param>
        public static Patients CreatePatients(global::System.Int32 id)
        {
            Patients patients = new Patients();
            patients.Id = id;
            return patients;
        }

        #endregion

        #region Propriétés primitives
    
        /// <summary>
        /// Aucune documentation sur les métadonnées n'est disponible.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=true, IsNullable=false)]
        [DataMemberAttribute()]
        public global::System.Int32 Id
        {
            get
            {
                return _Id;
            }
            set
            {
                if (_Id != value)
                {
                    OnIdChanging(value);
                    ReportPropertyChanging("Id");
                    _Id = StructuralObject.SetValidValue(value);
                    ReportPropertyChanged("Id");
                    OnIdChanged();
                }
            }
        }
        private global::System.Int32 _Id;
        partial void OnIdChanging(global::System.Int32 value);
        partial void OnIdChanged();
    
        /// <summary>
        /// Aucune documentation sur les métadonnées n'est disponible.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public global::System.String Nom
        {
            get
            {
                return _Nom;
            }
            set
            {
                OnNomChanging(value);
                ReportPropertyChanging("Nom");
                _Nom = StructuralObject.SetValidValue(value, true);
                ReportPropertyChanged("Nom");
                OnNomChanged();
            }
        }
        private global::System.String _Nom;
        partial void OnNomChanging(global::System.String value);
        partial void OnNomChanged();
    
        /// <summary>
        /// Aucune documentation sur les métadonnées n'est disponible.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public global::System.String Prenom
        {
            get
            {
                return _Prenom;
            }
            set
            {
                OnPrenomChanging(value);
                ReportPropertyChanging("Prenom");
                _Prenom = StructuralObject.SetValidValue(value, true);
                ReportPropertyChanged("Prenom");
                OnPrenomChanged();
            }
        }
        private global::System.String _Prenom;
        partial void OnPrenomChanging(global::System.String value);
        partial void OnPrenomChanged();
    
        /// <summary>
        /// Aucune documentation sur les métadonnées n'est disponible.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public global::System.String Telephone
        {
            get
            {
                return _Telephone;
            }
            set
            {
                OnTelephoneChanging(value);
                ReportPropertyChanging("Telephone");
                _Telephone = StructuralObject.SetValidValue(value, true);
                ReportPropertyChanged("Telephone");
                OnTelephoneChanged();
            }
        }
        private global::System.String _Telephone;
        partial void OnTelephoneChanging(global::System.String value);
        partial void OnTelephoneChanged();
    
        /// <summary>
        /// Aucune documentation sur les métadonnées n'est disponible.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public global::System.String Anamnese
        {
            get
            {
                return _Anamnese;
            }
            set
            {
                OnAnamneseChanging(value);
                ReportPropertyChanging("Anamnese");
                _Anamnese = StructuralObject.SetValidValue(value, true);
                ReportPropertyChanged("Anamnese");
                OnAnamneseChanged();
            }
        }
        private global::System.String _Anamnese;
        partial void OnAnamneseChanging(global::System.String value);
        partial void OnAnamneseChanged();
    
        /// <summary>
        /// Aucune documentation sur les métadonnées n'est disponible.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.DateTime> DateBilan
        {
            get
            {
                return _DateBilan;
            }
            set
            {
                OnDateBilanChanging(value);
                ReportPropertyChanging("DateBilan");
                _DateBilan = StructuralObject.SetValidValue(value);
                ReportPropertyChanged("DateBilan");
                OnDateBilanChanged();
            }
        }
        private Nullable<global::System.DateTime> _DateBilan;
        partial void OnDateBilanChanging(Nullable<global::System.DateTime> value);
        partial void OnDateBilanChanged();
    
        /// <summary>
        /// Aucune documentation sur les métadonnées n'est disponible.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.DateTime> DateDemandeBilan
        {
            get
            {
                return _DateDemandeBilan;
            }
            set
            {
                OnDateDemandeBilanChanging(value);
                ReportPropertyChanging("DateDemandeBilan");
                _DateDemandeBilan = StructuralObject.SetValidValue(value);
                ReportPropertyChanged("DateDemandeBilan");
                OnDateDemandeBilanChanged();
            }
        }
        private Nullable<global::System.DateTime> _DateDemandeBilan;
        partial void OnDateDemandeBilanChanging(Nullable<global::System.DateTime> value);
        partial void OnDateDemandeBilanChanged();
    
        /// <summary>
        /// Aucune documentation sur les métadonnées n'est disponible.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public global::System.String OrigineDemande
        {
            get
            {
                return _OrigineDemande;
            }
            set
            {
                OnOrigineDemandeChanging(value);
                ReportPropertyChanging("OrigineDemande");
                _OrigineDemande = StructuralObject.SetValidValue(value, true);
                ReportPropertyChanged("OrigineDemande");
                OnOrigineDemandeChanged();
            }
        }
        private global::System.String _OrigineDemande;
        partial void OnOrigineDemandeChanging(global::System.String value);
        partial void OnOrigineDemandeChanged();
    
        /// <summary>
        /// Aucune documentation sur les métadonnées n'est disponible.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public global::System.String DomaineIntervention
        {
            get
            {
                return _DomaineIntervention;
            }
            set
            {
                OnDomaineInterventionChanging(value);
                ReportPropertyChanging("DomaineIntervention");
                _DomaineIntervention = StructuralObject.SetValidValue(value, true);
                ReportPropertyChanged("DomaineIntervention");
                OnDomaineInterventionChanged();
            }
        }
        private global::System.String _DomaineIntervention;
        partial void OnDomaineInterventionChanging(global::System.String value);
        partial void OnDomaineInterventionChanged();
    
        /// <summary>
        /// Aucune documentation sur les métadonnées n'est disponible.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public global::System.String EtatBilan
        {
            get
            {
                return _EtatBilan;
            }
            set
            {
                OnEtatBilanChanging(value);
                ReportPropertyChanging("EtatBilan");
                _EtatBilan = StructuralObject.SetValidValue(value, true);
                ReportPropertyChanged("EtatBilan");
                OnEtatBilanChanged();
            }
        }
        private global::System.String _EtatBilan;
        partial void OnEtatBilanChanging(global::System.String value);
        partial void OnEtatBilanChanged();

        #endregion

    
    }

    #endregion

    
}
