import should from 'should';

import {calculeTva} from "../app.js";
import {createProduit} from "../app.js";
import {prixTotal} from "../app.js";


describe("Prix total", function(){
        it("calcule tva", function(){
                console.log(prixTotal());
                console.log(calculeTva());
            });
    });