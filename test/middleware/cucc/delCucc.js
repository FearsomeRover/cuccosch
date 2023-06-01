const expect = require('chai').expect;
const delCuccMW = require('../../../middleware/cucc/delCucc');

describe('delCuccMW', function () {
    it('calls next(err) upon error', function (done) {
        const res = {
            locals: {
                cucc: {
                    remove: (cb) => {
                        cb("error");
                    }
                }
            }
        };
        const next =  (err) =>{
            expect(err).to.eql("error");
            done();
        }
        delCuccMW({})({}, res, next);
    });
    it('redirects user to / when finished', function (done) {
        const res = {
            locals: {
                cucc: {
                    remove: (cb) => {
                        cb();
                    }
                }
            },
            redirect: (url) => {
                expect(url).to.be.eql('/');
                done();
            }
        };
        const next =  () =>{
            expect(1).to.be.eql(0);
        }
        delCuccMW({})({}, res, next);
    });
});