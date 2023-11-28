import app from './app';
import { ENV_VARS } from './utils';

app.listen(ENV_VARS.PORT, async () => {
    // eslint-disable-next-line no-console
    console.log(
        `Server running on PORT ::${ENV_VARS.PORT} in ${ENV_VARS.NODE_ENV} mode`
    );
});
