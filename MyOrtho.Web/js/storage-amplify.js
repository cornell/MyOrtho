(function($, window){
    
    var dropboxStorage = function storage(){
        
        var _table;
        var _tableId;
        var _tableNameId;
        var _row;
        
        function init(tableName){            
            
            _tableName = tableName;
            _table  = amplify.store(tableName);
            if(! _table){
                _table = [];
            }
            _tableNameId = 'id' + tableName
            _tableId = amplify.store(_tableNameId);
            if(! _tableId){
                _tableId = [];
            }                        
        }
        
        function save(obj){
            
            var newId = _table.length;
            obj.id = newId;
            _table.push(obj);
            amplify.store(_tableName, obj);
            
            _tableId.push(newId);
            amplify.store(_tableNameId, _tableId);
        }
        
        function update(property, value) {
            
        }
        
        function delete() {
            
        }
        
        function get(property){
            
        }
        
        return {
            save: save,
            update: update,
            delete: delete,
            get: get
        }
    };
    
    window.data = dropboxStorage;
})($, window);