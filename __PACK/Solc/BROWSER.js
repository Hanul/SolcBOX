Solc.Compile=METHOD(o=>{let c;return{run:(o,r)=>{let n=r.error,e=r.success;void 0===c&&(c=WORKER(Solc.R("solc-worker.js"))),c.send({methodName:"compile",data:o},o=>{void 0===o.contracts?n(o.errors[0]):e(o.contracts)})}}});