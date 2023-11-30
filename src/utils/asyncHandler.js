const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error));
    };
};

export { asyncHandler };


/*
const asyncHancdler = () => {}
const asyncHancdler = (func) => () => {}
const asyncHancdler = (func) => async () => {}
*/

/*
const asyncHandler = (func) => async () => {
    try {
        await func(req, res, next)
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}
*/