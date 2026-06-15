// js/config.js

const SB_URL = 'https://ehcfrserpdqthkdqizsz.supabase.co';

const SB_KEY =
'TU_SUPABASE_ANON_KEY';

const sb = supabase.createClient(
    SB_URL,
    SB_KEY
);

const ROLE_MAP = {
    'tony_bravo@hotmail.com':'admin',
    'memsnena1005@hotmail.com':'tesorero_admin',
    'enrique_sabori@hotmail.com':'tesorero_operativo',
    'axlj31@gmail.com':'socio',
    'itzel_riv93@hotmail.com':'socio',
    'patty_walter25@hotmail.com':'socio',
    'viacp_1110@hotmail.com':'socio'
};