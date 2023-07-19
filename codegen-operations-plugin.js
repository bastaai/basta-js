module.exports = {
  /** Custom plugin that outputs raw operations strings so we can achieve zero dependency. */
  plugin(_, documents) {
    return documents
      .map((doc) => {
        const opName = doc.document.definitions.find(
          (def) => def.kind === 'OperationDefinition'
        ).name.value;
        return `export const ${opName} = \`${doc.rawSDL}\`;`;
      })
      .join('\n\n');
  },
};
