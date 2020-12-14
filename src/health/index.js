'use strict';

exports.status = (req, res, next) => {
  res.status(200).json({ status: 'UP' });
};


exports.postOrder = (req, res, next) => {

  const order =   req.body
  global.currentOrder = order
  res.status(200).json({})
  
}

exports.getOrder = (req, res, next) => {

  if(global.currentOrder){
    const auxOrder  = global.currentOrder
    global.currentOrder = null
    res.status(200).json(auxOrder)
  }
  else{
    res.status(404).json({})
  }
 
}