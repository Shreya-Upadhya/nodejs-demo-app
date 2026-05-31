// Simple test file for CI/CD pipeline
const assert = require('assert');

console.log('\n🧪 Running Tests...\n');

// Test 1: Basic math
try {
    assert.strictEqual(1 + 1, 2);
    console.log('✅ Test 1 passed: Basic math works');
} catch (error) {
    console.error('❌ Test 1 failed: Math error');
    process.exit(1);
}

// Test 2: String test
try {
    assert.strictEqual(typeof 'hello', 'string');
    console.log('✅ Test 2 passed: String type is correct');
} catch (error) {
    console.error('❌ Test 2 failed: String error');
    process.exit(1);
}

// Test 3: Object test
try {
    const obj = { name: 'test' };
    assert.strictEqual(typeof obj, 'object');
    console.log('✅ Test 3 passed: Object type is correct');
} catch (error) {
    console.error('❌ Test 3 failed: Object error');
    process.exit(1);
}

console.log('\n🎉 All tests passed successfully!\n');