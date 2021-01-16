const express = require('express')
const cors = require('cors');
const axios = require('axios');
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
const api = 'https://api.exchangeratesapi.io/latest';


app.get('/', (req, res) => {
  res.status(200).json({
    data: 'Home'
  })
})

app.get('/api/rates', async (req, res) => {
  try {
    const data = await axios.get(api);
    const { base, currency } = req.query;
    const { rates, date } = data.data;
    let filteredRates = {}
    let currencies = currency.split(',');

    // currency multiplier
    const multiplier = rates[base] || (base === 'EUR' ? 1 : undefined)

    if (multiplier) {
      let i;
      for (i = 0; i < currencies.length; i += 1) {        
        if (!rates[currencies[i]] && currencies[i] !== 'EUR') throw(new Error('One or more query paramater is invalid, or not available'))
          filteredRates[currencies[i]] = rates[currencies[i]] / multiplier || 1 / multiplier;
      }

      return res.status(200).json({
        results: {
          base,
          date,
          rates: filteredRates
        }
      })
    }

    throw (new Error(` the base currency ${base} is not available`));
  } catch (err) {
    res.status(401).json({
      err: 401,
      message: err.message || 'Couldn\'t fetch result.'
    });
  }
})




app.listen(port, () => console.log('app listening on port ' + port))
