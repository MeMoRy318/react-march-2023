// @ts-ignore
const mapLaunches = ( launches ) => launches.map( value => ({
    year: value?.launch_year,
    mission: value?.mission_name,
    patch: value?.links?.mission_patch_small || 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
    key: value?.launch_date_unix,
}));

export { mapLaunches };
