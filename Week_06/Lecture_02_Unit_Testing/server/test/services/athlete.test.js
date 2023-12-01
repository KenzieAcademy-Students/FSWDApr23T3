import {
  findAllAthletes,
  createAthlete,
} from "../../src/services/athlete.services";
import { describe, it } from "mocha";
import { expect, should } from "chai";

describe("Athlete Services", function () {
  describe("createAthlete", function () {
    it("should return a newly created athlete document", function (done) {
      createAthlete("Jalen Hurts", 1)
        .then((results) => {
          expect(results).to.be.an("object");
          expect(results).to.have.property("_id");
          expect(results).to.have.property("name");
          expect(results.name).to.equal("Jalen Hurts");
          expect(results).to.have.property("jerseyNum");
          expect(results.jerseyNum).to.equal(1);
          done();
        })
        .catch((error) => done(error));
    });
  });

  describe("findAllAthletes", function () {
    it("should return an array of athlete documents", function (done) {
      createAthlete("Jason Kelce", 62)
        .then(() => createAthlete("Lane Johnson", 65))
        .then(() => findAllAthletes())
        .then((results) => {
          expect(results).to.be.an("array");
          expect(
            results.every((doc) => doc._id && doc.name && doc.jerseyNum)
          ).to.equal(true);
          done();
        })
        .catch((error) => done(error));
    });
  });
});
