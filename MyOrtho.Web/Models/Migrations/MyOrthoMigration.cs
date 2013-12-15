using FluentMigrator;

namespace MyOrtho.Web.Models.Migrations
{
    [Migration(4)]
    public class MyOrthoMigration : Migration
    {
        public override void Up()
        {
            if (! Schema.Table("Patient").Exists())
            {
                Create
                    .Table("Patient")
                    .WithColumn("Id").AsInt64().PrimaryKey().Identity()
                    .WithColumn("Nom").AsAnsiString()
                    .WithColumn("Prenom").AsAnsiString(100)
                    .WithColumn("Commentaire").AsAnsiString(500)
                    .WithColumn("Telephone").AsAnsiString(10)
                    .WithColumn("IdOrigineDemande").AsInt64()
                    .WithColumn("IdDomaineIntervention").AsInt64()
                    .WithColumn("EtatBilan").AsAnsiString()
                    .WithColumn("DateBilan").AsDateTime().Nullable()
                    .WithColumn("DateDemandeBilan").AsDateTime().Nullable()
                    .WithColumn("Disponibilite").AsAnsiString(500);
            }
        }

        public override void Down()
        {
            if (Schema.Table("Patient").Exists())
            {
                Delete.Table("Patient");
            }
        }
    }
}