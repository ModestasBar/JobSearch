import React from 'react';

const CheckBox = () => {
    return (
    <fieldset id="favorite_movies" class="bn">
        <div class="flex items-center mb2">
            <input class="mr2" type="checkbox" id="spacejam" value="spacejam"/>
            <label for="spacejam" class="lh-copy">Space Jam</label>
        </div>
        <div class="flex items-center mb2">
            <input class="mr2" type="checkbox" id="airbud" value="airbud"/>
            <label for="airbud" class="lh-copy">Air Bud</label>
        </div>
        <div class="flex items-center mb2">
            <input class="mr2" type="checkbox" id="hocuspocus" value="hocuspocus"/>
            <label for="hocuspocus" class="lh-copy">Hocus Pocus</label>
        </div>
    </fieldset>
    );
}

export default CheckBox;