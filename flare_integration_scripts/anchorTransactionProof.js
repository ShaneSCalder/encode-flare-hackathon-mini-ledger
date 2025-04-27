const fs = require('fs');
const path = require('path');

async function anchorTransactionMemoProof() {
  const memoProof = JSON.parse(fs.readFileSync(
    path.join(__dirname, 'examples/memos/transaction_memo.json'), 'utf-8'
  ));

  console.log('✅ Transaction Memo Proof ready:');
  console.log({
    proofID: memoProof.proofID,
    proofHash: memoProof.proofHash,
    ledger_id: memoProof.ledger_id,
    memo_id: memoProof.memo_id
  });

  // 🚀 Here you would call Flare anchoring function
}

module.exports = { anchorTransactionMemoProof };
