using System.Configuration;
using System.Web.Configuration;
using MyOrtho.Web.Models.Migrations;

namespace MyOrtho.Web.App_Start
{
    public class DatabaseConfig
    {
        public static void MigrateDatabase()
        {
            string connectionString = ConfigurationManager.ConnectionStrings["Simple.Data.Properties.Settings.DefaultConnectionString"].ConnectionString;

            var migrator = new Migrator(connectionString);
#if DEBUG
            migrator.Migrate(runner => runner.MigrateDown(3));
#endif
            migrator.Migrate(runner => runner.MigrateUp());
        }
    }
}