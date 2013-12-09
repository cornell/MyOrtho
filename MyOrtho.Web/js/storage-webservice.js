(function ($, window) {

    var webServiceStorage = function storage() {

        function init(tableName) {

            _tableName = tableName;
            _table = amplify.store(tableName);
            if (!_table) {
                _table = [];
            }
            _tableNameId = 'id' + tableName
            _tableId = amplify.store(_tableNameId);
            if (!_tableId) {
                _tableId = [];
            }
        }

        function save(obj) {

            var newId = _table.length;
            obj.id = newId;
            _table.push(obj);
            amplify.store(_tableName, obj);

            _tableId.push(newId);
            amplify.store(_tableNameId, _tableId);
        }

        function update(property, value) {

        }

        function delete_() {

        }

        function get(property) {

        }

        return {
            save: save,
            update: update,
            delete_: delete_,
            get: get
        };
    };

    window.data = webServiceStorage;
})($, window);