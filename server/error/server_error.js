export default (err, req, res, next) => {
    return res.status(err.status || 500).json({
        message: err.message,
        error: process.env.NODE_ENV !== "development"? err: {}
    });
};