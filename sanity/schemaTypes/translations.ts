
const translations = ({
    name: 'translations',
    type: 'array',
    of: [
        {
            type: 'object',
            fields: [
                { name: 'language', type: 'reference', to: [{ type: 'language' }] },
                { name: 'text', type: 'string' }
            ]
        }
    ]
})
export default translations