using System;
using System.Reflection;
using FluentMigrator;
using FluentMigrator.Runner;
using FluentMigrator.Runner.Announcers;
using FluentMigrator.Runner.Initialization;
using FluentMigrator.Runner.Processors.SqlServer;

namespace MyOrtho.Web.Models.Migrations
{
    public class Migrator
    {
        readonly string _connectionString;

        public Migrator(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void Migrate(Action<IMigrationRunner> runnerAction)
        {            
            //using (var announcer = new NullAnnouncer())
            var announcer = new TextWriterAnnouncer(s => System.Diagnostics.Debug.WriteLine(s));
            var migrationContext = new RunnerContext(announcer)
            {
#if DEBUG
                // will create testdata
                Profile = "development"
#endif
            };
            var options = new MigrationOptions { PreviewOnly = false, Timeout = 0 };
            var factory = new SqlServer2008ProcessorFactory();
            var assembly = Assembly.GetExecutingAssembly();
            var processor = factory.Create(_connectionString, announcer, options);
            var runner = new MigrationRunner(assembly, migrationContext, processor);
            runnerAction(runner);
        }

        private class MigrationOptions : IMigrationProcessorOptions
        {
            public bool PreviewOnly { get; set; }
            public int Timeout { get; set; }

            public string ProviderSwitches
            {
                get { throw new NotImplementedException(); }
            }
        }
    }
}