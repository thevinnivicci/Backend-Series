const asyncHancdler = (requesHandler) => {
    (req, res, next) => {
        Promise.resolve(requesHandler()).catch((err) => next(err))
    }
}

export { asyncHancdler }

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