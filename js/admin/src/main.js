/*
 * This file is part of smachi/flarum-gravatar
 *
 * (c) Salva Machí <salvamb@sispixels.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { extend } from 'flarum/extend';
import app from 'flarum/app';

import GravatarSettingsModal from 'oe800/gravatar/components/GravatarSettingsModal';

app.initializers.add('oe800-gravatar', app => {
	app.extensionSettings['oe800-gravatar'] = () => app.modal.show(new GravatarSettingsModal());
});
