import {promises as fs} from 'fs';
import path from 'path';

export default async function handler(req, res) {
  
const jsondirectory = path.join(process.cwd(),'');
const fileContent = await  fs.readFileSync(jsondirectory + '/data.json', 'utf8');

res.status(200).json(fileContent);
console.log(fileContent);
}
