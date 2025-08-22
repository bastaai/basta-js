/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs').promises;

const replaceInFile = async (filePath: string) => {
  console.log('post-codegen.ts: Replacing types in', filePath);
  try {
    let fileContent = await fs.readFile(filePath, 'utf8');

    fileContent = fileContent.replace(/Node & {/g, '{');

    fileContent = fileContent.replace(/Scalars\['ID'\]\['input'\]/g, 'string');
    fileContent = fileContent.replace(/Scalars\['Int'\]\['input'\]/g, 'number');
    fileContent = fileContent.replace(/Scalars\['String'\]\['input'\]/g, 'string');
    fileContent = fileContent.replace(/Scalars\['Boolean'\]\['input'\]/g, 'boolean');
    fileContent = fileContent.replace(/Scalars\['Float'\]\['input'\]/g, 'number');

    fileContent = fileContent.replace(/Scalars\['ID'\]\['output'\]/g, 'string');
    fileContent = fileContent.replace(/Scalars\['Int'\]\['output'\]/g, 'number');
    fileContent = fileContent.replace(/Scalars\['String'\]\['output'\]/g, 'string');
    fileContent = fileContent.replace(/Scalars\['Boolean'\]\['output'\]/g, 'boolean');
    fileContent = fileContent.replace(/Scalars\['Float'\]\['output'\]/g, 'number');

    fileContent = fileContent.replace(
      '/** All built-in and custom scalars, mapped to their actual values */\nexport type Scalars = {\n  ID: string;\n  String: string;\n  Boolean: boolean;\n  Int: number;\n  Float: number;\n};\n',
      ''
    );

    await fs.writeFile(filePath, fileContent, 'utf8');
  } catch (err) {
    console.error(err);
  }
};

replaceInFile('./src/gql/generated/types.ts');
