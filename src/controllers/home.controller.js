/**
 * @Author: sandeep.patel
 * @Date: 01-Jul-19, Mon
 **/

module.exports = (CONFIG) => {

    return {

        // Status check route
        index: (req, res, next) => {
            res.send({
                success: true,
                now: (Date.now()),
            });
        },

        // Notice we have used `async` function here
        test: async (req, res) => {
            let data = await new Promise((resolve) => {
                console.log('Promise started');
                setTimeout(() => {
                    console.log('Promise done');
                    resolve('set timeout done');
                }, 2000);
            });
            console.log('Log after await');
            res.send({
                valid: true,
                data,
                num1: req.body.num1,
                num2: req.body.num2,
            });
        }
    };
};