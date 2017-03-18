var Apply = require('../models/apply') //引入movie模块

    // comment
exports.save= function(req,res){
    var _apply = req.body.apply
    var movieId=_apply.movie

    if(_apply.cid){
        Apply.findById(_apply.cid,function(err,apply){

            apply.save(function(err,apply){
                if (err) {
                    console.log(err) 
                }

                res.redirect('success/movie/' + movieId)
            })
        })
    }
    else{
        var apply= new Apply(_apply)

        apply.save(function(err, apply) {
            if (err) {
                console.log(err) 
            }

            res.redirect('success/movie/' + movieId)
        })
    }       
}
    //list delete movie
exports.del=function(req,res){
        var id = req.query.id

        if (id) {
            Apply.remove({ _id: id }, function(err, apply) {
                if (err) {
                    console.log(err)
                } else {
                    res.json({ success: 1 })
                }
            })
        }
    }
