import fs from 'fs';


export default function handler(req, res) {
 
  if (req.method === 'POST') {
    
    const formData = req.body;
    const data = fs.readFileSync('data.json');
    const records = JSON.parse(data);
    records.push(formData);
    const jsonData = JSON.stringify(records,null,2);
    fs.writeFileSync('data.json', jsonData, 
    (err) => {
      if (err) {
        console.error(err);
         return res.status(500).json({ message: 'Failed to store form data' });
        } else {
             console.log(formData);
           return  res.status(200).json({message: 'Success'});
         
           
        }
        }
    )
        } 
    else{
         return res.status(500).json({ message: 'Invalid request method' });
        }
    }
