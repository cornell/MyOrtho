(function($, window){
    
    var _table;
    var _row;
    
    var DropboxStorage = function(tableName){
        
        if(typeof(client) === 'undefined'){
            client = new Dropbox.Client({key: 'fhd8uv4rj6gdzne'});
            client.authenticate();
        }
        if (client.isAuthenticated()) {
            // Client is authenticated. Display UI.                
            console.log('isAuthenticated');
            
            // Try to finish OAuth authorization.
            client.authenticate({interactive: false}, function (error) {
                console.log('authenticate({interactive: false}')
                if (error) {
                    console.log('Authentication error: ' + error);
                }
            }); 
            
            var datastoreManager = client.getDatastoreManager();
            datastoreManager.openDefaultDatastore(function (error, datastore) {
                if (error) {
                    alert('Error opening default datastore: ' + error);
                }
                
                if(tableName){
                    _table = datastore.getTable(tableName);
                }
            });
        }
        
        function save(object){                
            var firstTask = _table.insert(object);            
        }
        
        function update(property, value) {
            firstTask.set(property, value);
        }
        
        function delete_() {
            _row.deleteRecord();
        }
        
        function get(property){
            return _row.get(property);
        }
        
        function getAll(){
            if(! _table){
                _table = datastore.getTable(tableName);
            }            
            return _table.query();
        }
        
        return {
            save: save,
            update: update,
            delete: delete_,
            get: get,
            getAll: getAll
        }
    };
    
    window.Storage = DropboxStorage;
    
})($, window);