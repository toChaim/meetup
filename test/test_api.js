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
            .expect(200, done);
    });
});