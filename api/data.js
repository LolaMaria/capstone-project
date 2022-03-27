const data = [{ name: 'Aloe', fact: 'Cute' }];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.json(data);
    return;
  }
}
