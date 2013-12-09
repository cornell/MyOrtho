var my = my || {};
my.utils = (function () {
    var 
    formatTemplatePath = function (name) {
        return "/templates/_" + name + ".tmpl.html";
    },

    renderTemplate = function (tmplName, targetSelector, data, callback) {

        var file = formatTemplatePath(tmplName);

        $.get(file, null, function (template) {
//            console.log(file);
            var tmpl = $.templates(template);
            var htmlString = tmpl.render([data]);
//            console.log(htmlString);
            if (targetSelector) {
                $(targetSelector).html(htmlString);
            }
            if (callback) {
                callback();
            }
            return htmlString;
        });
    };

    return {
        formatTemplatePath: formatTemplatePath,
        renderExternalTemplate: renderTemplate
    };
})();
