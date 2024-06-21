/**
 * Test suite for the sendPaymentRequestToApi function.
 */
describe('sendPaymentRequestToApi', () => {
  /**
   * Test case to verify if the sendPaymentRequestToApi function
   * calls console.log with the right arguments.
   */
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    // Spying on the console.log method
    const bigBrother = sinon.spy(console);
    // Stubbing the calculateNumber method of Utils module
    const dummy = sinon.stub(Utils, 'calculateNumber');

    // Setting up the return value of the calculateNumber method
    dummy.returns(10);

    // Calling the sendPaymentRequestToApi function with some test data
    sendPaymentRequestToApi(100, 20);

    // Asserting that the calculateNumber method of Utils module was called with the right arguments
    expect(dummy.calledWith('SUM', 100, 20)).to.be.true;
    // Asserting that the calculateNumber method of Utils module was called only once
    expect(dummy.callCount).to.be.equal(1);
    // Asserting that the console.log method of console was called with the right arguments
    expect(bigBrother.log.calledWith('The total is: 10')).to.be.true;
    // Asserting that the console.log method of console was called only once
    expect(bigBrother.log.callCount).to.be.equal(1);

    // Restoring the original calculateNumber method of Utils module
    dummy.restore();
    // Restoring the original console.log method of console
    bigBrother.log.restore();
  });
});
