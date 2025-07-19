module.exports = function handlebars(dayjs, Handlebars) {
    return {
        count: (aString) => aString + 1,
        formatDate: (date) => dayjs(date).format('DD/MM/YYYY HH:mm:ss'),
        sortable: (name, sort) => {
            const sortType = sort.column === name ? sort.type : 'default';
            const icons = {
                default: 'fa-solid fa-sort',
                asc: 'fa-solid fa-arrow-up-short-wide',
                desc: 'fa-solid fa-arrow-up-wide-short',
            };
            const types = {
                default: 'desc',
                asc: 'desc',
                desc: 'asc',
            };
            const icon = icons[sortType];
            const type = types[sortType];

            const href = Handlebars.escapeExpression(
                `?_sort&column=${name}&type=${type}`,
            );

            const output = `<a href="${href}">
                  <i class="${icon}"></i>
                </a>`;
            return new Handlebars.SafeString(output);
        },
    };
};
