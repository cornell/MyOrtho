$.views.converters({
    formatPhoneNumber: function (value) {
        if (value.length !== 10) return value;

        return value.slice(0, 2) + " " + value.slice(2, 4) + " " + value.slice(4, 6) + " " + value.slice(6, 8) + " " + value.slice(8, 10);
    },
    formatDate: function (value) {
        return moment(value).format('LL');
    }
});