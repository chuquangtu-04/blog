module.exports = function sortMiddleware(req, res, next) {
    const normalObject = Object.assign({}, req.query);
    res.locals._sort = {
        enabled: false,
        type: 'default',
    };

    if (normalObject.hasOwnProperty('_sort')) {
        // res.locals._sort.enabled = true;
        // res.locals._sort.type = normalObject.type;
        // res.locals._sort.column = normalObject.column;
        Object.assign(res.locals._sort, {
            enabled: true,
            type: normalObject.type,
            column: normalObject.column,
        });
    }
    next();
};
