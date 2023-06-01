const expect = require('chai').expect;
const getSzobaMW = require('../../../middleware/szoba/getSzobaMW');
const szobaModel = require("../../../models/szoba");

describe('getSzobaMW', function () {
    it('redirects upon undefined szobaid', function (done) {
        const req = {
            params:{
                szobaid: undefined
            }
        }
        const res = {
            redirect: (url) => {
                expect(url).to.be.eql('/');
                done();
            }
        };
        const next =  () =>{
            expect(1).to.be.eql(0);
        }
        getSzobaMW({})(req, res, next);
    });
    it('calls next(err) upon error', function (done) {
        const objRepo = {
            szobaModel:{
                findOne: (obj, cb) => {
                    cb("error", null);
                }
            }
        }
        const req = {
            params:{
                szobaid: 134
            }
        }
        const next =  (err) =>{
            expect(err).to.be.eql("error");
            done();
        }
        getSzobaMW(objRepo)(req, {}, next);
    });
    it('redirects user to / if no object is found', function (done) {
        const objRepo = {
            szobaModel:{
                findOne: (obj, cb) => {
                    cb(null, null);
                }
            }
        }
        const req = {
            params:{
                szobaid: 134
            }
        }
        const res = {
            redirect: (url) => {
                expect(url).to.be.eql('/');
                done();
            }
        };
        getSzobaMW(objRepo)(req, res, ()=>{});
    });
    it('puts the result to res.locals.szoba and calls next()', function (done) {
        const objRepo = {
            szobaModel:{
                findOne: (obj, cb) => {
                    cb(null, "result");
                }
            }
        }
        const req = {
            params:{
                szobaid: 134
            }
        }
        const res = {
            locals:{}
        };
        const next =  () =>{
            done();
        }
        getSzobaMW(objRepo)(req, res, next);
        expect(res.locals.szoba).to.be.eql("result");
    });
});