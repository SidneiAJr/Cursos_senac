export const errorMiddleware = (err,req,res,next) => {
  const status = err.statusCode || 500;
  const isOperation = err.isOperation || false
  res.status(status).json({mensagem: isOperation? err.mensagem: "Erro inesperado. Teste Novamente mais Tarde"});
};
