import { assert } from "chai";
import api from '../index'

describe('should run tests', ()=>{
    it('should have an NODE_ENV of test', ()=> {
        assert.equal(process.env.NODE_ENV,"test");
    });
});

describe('routes', ()=>{
    it('api should be a object', ()=> {
        assert.equal(typeof api,"object");
    });
});