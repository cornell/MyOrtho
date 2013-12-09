function data(storage){
    
    switch(storage) {
        case 'dropbox':
            dropbox();
            break;
        case 'amplify':
            amplify();
            break;
        default:
            break;
    }
    
    function dropbox()){
        var datastoreManager = client.getDatastoreManager();
        datastoreManager.openDefaultDatastore(function (error, datastore) {
            if (error) {
                alert('Error opening default datastore: ' + error);
            }
            
            var bilanTable = datastore.getTable('bilans');
            
            var firstTask = bilanTable.insert({
                taskname: 'Buy milk',
                completed: false,
                created: new Date()
            });
            
            //
            var taskname = firstTask.get('taskname');
            
            firstTask.set('completed', true);
            
            firstTask.deleteRecord();
            
            
        });
    }    
    
    
}