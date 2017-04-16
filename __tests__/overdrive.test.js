import React from 'react';
import Overdrive from '../src/overdrive';
import renderer from 'react-test-renderer';

describe('Overdrive', () => {
    it('should use props element to render', () => {
        const component = renderer.create(
            <Overdrive id="test" element="h1"><span>test</span></Overdrive>
        );
        let tree = component.toJSON();
        expect(tree.type).toEqual('h1');
    });
});
