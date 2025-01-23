PGDMP     	    0    
            |            BSData4    15.5    15.5 /    .           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            /           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            0           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            1           1262    36255    BSData4    DATABASE     |   CREATE DATABASE "BSData4" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE "BSData4";
                postgres    false            �            1259    36261 	   articulos    TABLE       CREATE TABLE public.articulos (
    id_articulo integer NOT NULL,
    nombre text,
    impuesto numeric(3,2),
    descuento numeric(3,2),
    margen numeric(3,2),
    stock integer,
    costo numeric(15,2),
    url_img text,
    id_categoria integer,
    segunda_desc text
);
    DROP TABLE public.articulos;
       public         heap    postgres    false            �            1259    36266    articulos_id_articulo_seq    SEQUENCE     �   CREATE SEQUENCE public.articulos_id_articulo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.articulos_id_articulo_seq;
       public          postgres    false    214            2           0    0    articulos_id_articulo_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.articulos_id_articulo_seq OWNED BY public.articulos.id_articulo;
          public          postgres    false    215            �            1259    36267 
   categorias    TABLE     \   CREATE TABLE public.categorias (
    id_categoria integer NOT NULL,
    descripcion text
);
    DROP TABLE public.categorias;
       public         heap    postgres    false            �            1259    36272    categorias_id_categoria_seq    SEQUENCE     �   CREATE SEQUENCE public.categorias_id_categoria_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.categorias_id_categoria_seq;
       public          postgres    false    216            3           0    0    categorias_id_categoria_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.categorias_id_categoria_seq OWNED BY public.categorias.id_categoria;
          public          postgres    false    217            �            1259    36273 	   det_venta    TABLE     �   CREATE TABLE public.det_venta (
    id_det integer NOT NULL,
    id_articulo integer,
    id_venta integer,
    cantidad integer,
    precio_unit numeric(15,2),
    envio numeric(15,0)
);
    DROP TABLE public.det_venta;
       public         heap    postgres    false            �            1259    36276    det_venta_id_det_seq    SEQUENCE     �   CREATE SEQUENCE public.det_venta_id_det_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.det_venta_id_det_seq;
       public          postgres    false    218            4           0    0    det_venta_id_det_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.det_venta_id_det_seq OWNED BY public.det_venta.id_det;
          public          postgres    false    219            �            1259    36277    rol    TABLE     c   CREATE TABLE public.rol (
    id_rol integer NOT NULL,
    descripcion text,
    estado boolean
);
    DROP TABLE public.rol;
       public         heap    postgres    false            �            1259    36282    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    id_usuario integer NOT NULL,
    id_rol integer,
    nombre text,
    direccion text,
    correo text,
    telefono numeric(11,0),
    no_doc numeric(11,0),
    ciudad text,
    img_user text,
    "contraseña" text
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    36287    usuarios_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.usuarios_id_usuario_seq;
       public          postgres    false    221            5           0    0    usuarios_id_usuario_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.usuarios_id_usuario_seq OWNED BY public.usuarios.id_usuario;
          public          postgres    false    222            �            1259    36288    ventas    TABLE     �   CREATE TABLE public.ventas (
    id_venta integer NOT NULL,
    fecha date,
    vr_total numeric(15,2),
    id_usuario integer
);
    DROP TABLE public.ventas;
       public         heap    postgres    false            �            1259    36291    ventas_id_venta_seq    SEQUENCE     �   CREATE SEQUENCE public.ventas_id_venta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.ventas_id_venta_seq;
       public          postgres    false    223            6           0    0    ventas_id_venta_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.ventas_id_venta_seq OWNED BY public.ventas.id_venta;
          public          postgres    false    224            }           2604    36292    articulos id_articulo    DEFAULT     ~   ALTER TABLE ONLY public.articulos ALTER COLUMN id_articulo SET DEFAULT nextval('public.articulos_id_articulo_seq'::regclass);
 D   ALTER TABLE public.articulos ALTER COLUMN id_articulo DROP DEFAULT;
       public          postgres    false    215    214            ~           2604    36293    categorias id_categoria    DEFAULT     �   ALTER TABLE ONLY public.categorias ALTER COLUMN id_categoria SET DEFAULT nextval('public.categorias_id_categoria_seq'::regclass);
 F   ALTER TABLE public.categorias ALTER COLUMN id_categoria DROP DEFAULT;
       public          postgres    false    217    216                       2604    36294    det_venta id_det    DEFAULT     t   ALTER TABLE ONLY public.det_venta ALTER COLUMN id_det SET DEFAULT nextval('public.det_venta_id_det_seq'::regclass);
 ?   ALTER TABLE public.det_venta ALTER COLUMN id_det DROP DEFAULT;
       public          postgres    false    219    218            �           2604    36295    usuarios id_usuario    DEFAULT     z   ALTER TABLE ONLY public.usuarios ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuarios_id_usuario_seq'::regclass);
 B   ALTER TABLE public.usuarios ALTER COLUMN id_usuario DROP DEFAULT;
       public          postgres    false    222    221            �           2604    36296    ventas id_venta    DEFAULT     r   ALTER TABLE ONLY public.ventas ALTER COLUMN id_venta SET DEFAULT nextval('public.ventas_id_venta_seq'::regclass);
 >   ALTER TABLE public.ventas ALTER COLUMN id_venta DROP DEFAULT;
       public          postgres    false    224    223            !          0    36261 	   articulos 
   TABLE DATA           �   COPY public.articulos (id_articulo, nombre, impuesto, descuento, margen, stock, costo, url_img, id_categoria, segunda_desc) FROM stdin;
    public          postgres    false    214   D6       #          0    36267 
   categorias 
   TABLE DATA           ?   COPY public.categorias (id_categoria, descripcion) FROM stdin;
    public          postgres    false    216   �B       %          0    36273 	   det_venta 
   TABLE DATA           `   COPY public.det_venta (id_det, id_articulo, id_venta, cantidad, precio_unit, envio) FROM stdin;
    public          postgres    false    218   �B       '          0    36277    rol 
   TABLE DATA           :   COPY public.rol (id_rol, descripcion, estado) FROM stdin;
    public          postgres    false    220   uC       (          0    36282    usuarios 
   TABLE DATA           �   COPY public.usuarios (id_usuario, id_rol, nombre, direccion, correo, telefono, no_doc, ciudad, img_user, "contraseña") FROM stdin;
    public          postgres    false    221   �C       *          0    36288    ventas 
   TABLE DATA           G   COPY public.ventas (id_venta, fecha, vr_total, id_usuario) FROM stdin;
    public          postgres    false    223   SF       7           0    0    articulos_id_articulo_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.articulos_id_articulo_seq', 1, false);
          public          postgres    false    215            8           0    0    categorias_id_categoria_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.categorias_id_categoria_seq', 1, false);
          public          postgres    false    217            9           0    0    det_venta_id_det_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.det_venta_id_det_seq', 1, false);
          public          postgres    false    219            :           0    0    usuarios_id_usuario_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.usuarios_id_usuario_seq', 1, false);
          public          postgres    false    222            ;           0    0    ventas_id_venta_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.ventas_id_venta_seq', 1, false);
          public          postgres    false    224            �           2606    36298    articulos articulos_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.articulos
    ADD CONSTRAINT articulos_pkey PRIMARY KEY (id_articulo);
 B   ALTER TABLE ONLY public.articulos DROP CONSTRAINT articulos_pkey;
       public            postgres    false    214            �           2606    36300    categorias categorias_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_pkey PRIMARY KEY (id_categoria);
 D   ALTER TABLE ONLY public.categorias DROP CONSTRAINT categorias_pkey;
       public            postgres    false    216            �           2606    36302    det_venta det_venta_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.det_venta
    ADD CONSTRAINT det_venta_pkey PRIMARY KEY (id_det);
 B   ALTER TABLE ONLY public.det_venta DROP CONSTRAINT det_venta_pkey;
       public            postgres    false    218            �           2606    36304    rol rol_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.rol
    ADD CONSTRAINT rol_pkey PRIMARY KEY (id_rol);
 6   ALTER TABLE ONLY public.rol DROP CONSTRAINT rol_pkey;
       public            postgres    false    220            �           2606    36306    usuarios usuarios_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id_usuario);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    221            �           2606    36308    ventas ventas_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.ventas
    ADD CONSTRAINT ventas_pkey PRIMARY KEY (id_venta);
 <   ALTER TABLE ONLY public.ventas DROP CONSTRAINT ventas_pkey;
       public            postgres    false    223            �           2606    36309 %   articulos articulos_id_categoria_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.articulos
    ADD CONSTRAINT articulos_id_categoria_fkey FOREIGN KEY (id_categoria) REFERENCES public.categorias(id_categoria) NOT VALID;
 O   ALTER TABLE ONLY public.articulos DROP CONSTRAINT articulos_id_categoria_fkey;
       public          postgres    false    214    3205    216            �           2606    36314 $   det_venta det_venta_id_articulo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.det_venta
    ADD CONSTRAINT det_venta_id_articulo_fkey FOREIGN KEY (id_articulo) REFERENCES public.articulos(id_articulo) NOT VALID;
 N   ALTER TABLE ONLY public.det_venta DROP CONSTRAINT det_venta_id_articulo_fkey;
       public          postgres    false    3203    218    214            �           2606    36319 !   det_venta det_venta_id_venta_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.det_venta
    ADD CONSTRAINT det_venta_id_venta_fkey FOREIGN KEY (id_venta) REFERENCES public.ventas(id_venta);
 K   ALTER TABLE ONLY public.det_venta DROP CONSTRAINT det_venta_id_venta_fkey;
       public          postgres    false    223    218    3213            �           2606    36324    usuarios usuarios_id_rol_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_id_rol_fkey FOREIGN KEY (id_rol) REFERENCES public.rol(id_rol) NOT VALID;
 G   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_id_rol_fkey;
       public          postgres    false    3209    221    220            �           2606    36329    ventas ventas_id_usuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ventas
    ADD CONSTRAINT ventas_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id_usuario);
 G   ALTER TABLE ONLY public.ventas DROP CONSTRAINT ventas_id_usuario_fkey;
       public          postgres    false    223    3211    221            !   .  x��[�v�8]�_�MV�V$ʏxv��N�3I'c'�Y�"!n�`��'��x�Es�	�������gr&ǲ(�Puq���zҗ~(2��"g|�_�~}��]�(a�Yo��cplx���� ���A�6˒��/_��"͔��y?�y�U����}�L�
r?S),&L_��^\�^\�����ݛ�`�RFS���io�+L`"ey�����^�t��ɐ=0L*�Lę`�Lp�p͙�'皅*e0-�D����/rJ�I��&g~���	<�#K�·���#�0�/�	X�X�ܗ��1�}O2�i9��x�9!����Hb�S�W.X�٭��2�o7ט4�T�1`�ơ�#�a�T��/��W�D̪� K�S��:$���!״�K����Uч'��C�
�nnag�0T,�<�c �L�C87��F����z���J���W3|�~�������Ce̟�!Y�?.C�/�<�c|����R{��p��҈&��נ�ub�)ai��@Nf߰t��J R�[h]�C	B~���<MD��"��0������U_0N��рJ�H��~�4���=MeH�N,���>��0<1���3����v�`y-�|B4V5)G���� ����C6���L>rZ$6dH~��!!w��Tfy��*N����|��#��&%���W{��ȁOi�����G|�Ebv{�lml?�U�k����c�$�<(XżS�?2��1��ء��gS�"���7�"��k������c���X"��~1,����˿�(9��_1,l8 ��ʧ�~Z���*�Z��8�Vg��X2Z�L#����ś����?������F��*Ԏ{g;!*�� �FP^o1y+�蚻��3�$�pĝұ��E	���	�Au%�s8�,#��w�(&0Wľ4�& h(ԲlH����8UzL�cDi*�`!Y��aӬ���{���̈́�a]����� W�W2-�V7�e*P mL�?8n���닫s�Z����2�����#js �9��Lߍ�E�Ձ��\�+���"
�uAΦ:��UҺB�?AQх\�Z%:���M��z@�� ��ʊ0$$a��`hٹ��.a�4z���p�CX�D�_0�e��0}��>����z(��;8i�e��u�[�z�;9�9�F�̼[�	ɬ��$j�/]H�:n�U�O�F�T�����2�DG��ؓq�HJ��T��Jl���K��60��5�7Ϛ�UZ�Ł�@Ƴ�H�Ŋ#�ŠZ�,���
�tI�C �Z�����
�M�u7��is�s,�����d�1#թ/��v�:;��ݧZ6��4�W�����l�@�<@=r)bl��h[V�7k2�^஭ k x"��E��g�a����撶���e (�y�[W�N����liL6H �QU�����^�;b5�ͣ27��&b^k>����l�4��i�x���`�u�R+L#FE�	�*��]��C=�m��)���ڦ�z&�m^��US���C��p�G�i�ab��ꬉ����b�~F1C����Q�h��ͧ���V��n��`�g����}��P�.�Ǖ�P��*�ʱ)��ܿ��z�t
��&�(S��
j ��j��6���C;����=��ȁQӎmRX�]O��v����ϟ[@���ז�� R�Ζi�s�1��t^	M'�i�n�I|(��y�.�����V�	.��ځ�|:��1аS���$�A�,��i#�yh뼽)Vǎb57b-�j�eLՊ�U6���f�>,Ҋ�ނ'Q�]�ħ���wjT9~7�*B`�t�T��o/S�G��[xKY�"�'rZ��b	Bz��	a�u��q�R/��.�ˣ��Cn4�zu�/ȝ8��ڱu�ip��Nr*)m-SV)kI�8�ϾM��{(�kRg���-օ��d��d�K*���z1N��W���Ͳ�	8]��;1� 6��a�������S3�	�P����)�V����I����FJ�r\�Trܢ�-��g**�W�Ֆn��a�f~�Ʉ�߃��o�f��NvR-U��+��'�i�y�k��a%����^�ҕ-աB����xhK_,V!K���<�)}���|��o!�j�KWu�-��`�&��T?k����`W5��:W;�L��v^%���L7i���!
۾F����צ��v�8�g�Ghr��Z7\mr9�e\%'l�o��?�=�\ͼ2�ڤ��n����i�Ve�~��r�%�wy��Kx��ZD�2Z��zfޣ�Y"� ��T|�[鋚�@����n�n��h����=�`�
�4�َ�wWn�8rCՂN�ilj���q�+Ŷ��`O7�;���^�k\++T�\�١��BA���(��-ë�u�����QLm��B=4�HvV����	�|�nq	q��fs	䡋]�!����Bt#n�ɢ�M3]K+웬�&�A6��k�؇�ӭ�-��?���_��h]
8���&@g�o�4ڶ������:|�iRr�gx�tY%k�&���j�PZQ�`����A��עd���c�/���ߚWK<���-�<7���/I'��~�I���AH���[�߲s��`oI���6 U�p��( ���Ғ>��"��r���/.
d�Td�!R��~5���I�W�����LU�ʇ�]oH�sH����>��G�A`#�����ho�t�WAtLم(�i�`�v7W-���B-ڄ�:��5������T���+A�׳�r��[�P��fx�?�����	j�%bI��4�������֋��ݹE�ˣ֝)ћ)����~��FE���zonU���[�<쵁d���W�K+6�����t\9+�_��)`J�DP�Z�B%�/a<oM&��2��=�h5��rԳ�2܈���fR�/���#�3podW��7d�>���(?M߻Q6�gk�,��ӊ��o��k�����a%Y+���n���D��̿�p�%�G\���(�u*�)��6l:,*�x�
�6Ҏ���p���2Vr���� ��w�+lu
V�=Ѽl�~i��g�7Jf�U�mk��N�?�j=�9�w�����"C�      #   (   x�3����+I<�1�ˈ3�()1/�˘3��$�+F��� ��	A      %   �   x�mP[�0�N�C���.{�s,��!�u� ��`7��j|�l�b���W��3�B�lfA��Xu$~@�����=���2� T�剧aW�����-�b�]���^X-�\�95���Fr�\�r�����a7�鏍e沬/�v��6��aZ�~�倫���R}      '   )   x�3�tL����,.)JL�/�,�2�t��L�+I�c���� �j
A      (   �  x�]��o�0ǟ�_a��T��;o�n�ԭ۴N�6��J\0	rR����%Hy�%�|�A���H��L�X�;J�הRH$���b��xJ�T����ͧ�bu�h6B���E- 0�ޣ�ML$�3AF�vL�m� �;J;j��grj�<%�<��.��U����Z��akP���O��!�����I��*��최��g*p�!-�38������/p|$fu�«����yH��oL�� ��Sm2����b��1�j{�@a/9|$~��IΪ��?�Ȼ����CX�>�P��u��@�s�]X�����/P9��Q
}8o��#���=*���d���a�d���h��mq�p�=ջH�F���K���AM�і� �Ί���]S8.�SV��k6w��п�ϐY�U\��Õ���-�>Á��r��P��|���=0�j�@#�J�lv')Sk�s�j�,jw)VUs��ۅ:��Xv-�
��>�^E���xx)XHő��Mܭ$����rg��-羠����W�@�{�:
0��e�*^�#��KQ>V�dKiC�;�Q�]��׎�Z�P��.����k�њ�nh�z���y���W��-�{G>�=Sʳ"{�Y�l�
{ԣ+x�-�2�p^�\�t�69�W���?�\�      *   �   x�M���0E�5�����zI�u�r$���.c����%v��"2E>"�'x�X��%�mQ�%:%g��#wc?q�%�Ć��$�xniܗ�;Hy��>c����B�Ȣ1cËP�c�oY+�<=�j�����dđ��ko�vV
��G�rF0�4Y� S5=�u"�GAX��IPԕ�f�i�Y�     