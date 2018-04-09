import { assert, expect } from "chai";
import request from "supertest";
import api from '../server'

describe('should run tests', ()=>{
    it('should have an NODE_ENV of test', ()=> {
        assert.equal(process.env.NODE_ENV,"test");
    });
});

describe('routes', ()=>{
    it('api should be a object', ()=> {
        assert.equal(typeof api,"function");
    });
    it('responds to /', (done)=>{
        request(api)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err,res)=>{
            if(err){ return done(err); }
            assert(res.body.message,"This is a very dull page. What is on the next page?");
            done();
        });
    });
    it('responds to /not_a_real_route', (done)=>{
        request(api)
        .get('/not_a_real_route')
        .expect('Content-Type', /json/)
        .expect(404)
        .end((err,res)=>{
            if(err){ return done(err); }
            assert(res.body.message,"Not Found");
            done();
        });
    });
});