import { program } from 'commander'
import fs from 'fs'
import csv from 'csv-parser'
import BigNumber from 'bignumber.js'


program
  .version('0.0.0')
  .requiredOption(
    '-i, --input <path>',
    'input JSON file location containing a map of account addresses to string balances'
  )

program.parse(process.argv)

const results: {
  [address: string]: string
} = {};

const toWei = new BigNumber('1000000000000000000')

fs.createReadStream(program.input, { encoding: 'utf8' })
  .pipe(csv())
  .on('data', (data) => results[data['User Public Address']] = new BigNumber(data['Total Cashback (95%)']).multipliedBy(toWei).toFixed())
  .on('end', () => {
    fs.writeFile('scripts/data.json', JSON.stringify(results), function (err) {
      if (err) throw err;
      console.log('complete');
    });
  });
