PGDMP         '                 }            bikeDB    15.10    15.10 L    Y           0    0    ENCODING    ENCODING         SET client_encoding = 'LATIN1';
                      false            Z           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            [           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            \           1262    16398    bikeDB    DATABASE     {   CREATE DATABASE "bikeDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE "bikeDB";
                postgres    false            �            1259    16635 	   articulos    TABLE     =  CREATE TABLE public.articulos (
    "idArticulo" integer NOT NULL,
    nombre text,
    impuesto numeric(3,2),
    descuento numeric(3,2),
    margen numeric(3,2),
    stock integer,
    costo numeric(15,2),
    url_img text,
    "idCategoria" integer,
    descripcion text,
    talla text,
    "precioTotal" text
);
    DROP TABLE public.articulos;
       public         heap    postgres    false            �            1259    16640    articulos_id_articulo_seq    SEQUENCE     �   CREATE SEQUENCE public.articulos_id_articulo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.articulos_id_articulo_seq;
       public          postgres    false    214            ]           0    0    articulos_id_articulo_seq    SEQUENCE OWNED BY     X   ALTER SEQUENCE public.articulos_id_articulo_seq OWNED BY public.articulos."idArticulo";
          public          postgres    false    215            �            1259    16641 
   categorias    TABLE     }   CREATE TABLE public.categorias (
    "idCategoria" integer NOT NULL,
    categoria text NOT NULL,
    "subCategoria" text
);
    DROP TABLE public.categorias;
       public         heap    postgres    false            �            1259    16646    categorias_id_categoria_seq    SEQUENCE     �   CREATE SEQUENCE public.categorias_id_categoria_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.categorias_id_categoria_seq;
       public          postgres    false    216            ^           0    0    categorias_id_categoria_seq    SEQUENCE OWNED BY     \   ALTER SEQUENCE public.categorias_id_categoria_seq OWNED BY public.categorias."idCategoria";
          public          postgres    false    217            �            1259    16662    compras    TABLE     �   CREATE TABLE public.compras (
    "idCompra" integer NOT NULL,
    "vrTotal" numeric(15,2),
    fecha date,
    envio numeric(15,2),
    "idUsuario" integer,
    direccion text
);
    DROP TABLE public.compras;
       public         heap    postgres    false            �            1259    16725    departamentos    TABLE     d   CREATE TABLE public.departamentos (
    "idDepartamento" integer NOT NULL,
    departamento text
);
 !   DROP TABLE public.departamentos;
       public         heap    postgres    false            �            1259    16647 	   detCompra    TABLE     �   CREATE TABLE public."detCompra" (
    "idDetCompra" integer NOT NULL,
    "idArticulo" integer NOT NULL,
    "idCompra" integer NOT NULL,
    cantidad integer,
    "precioUnitario" numeric(15,2),
    "vrTotal" numeric(15,2)
);
    DROP TABLE public."detCompra";
       public         heap    postgres    false            �            1259    16650    det_venta_id_det_seq    SEQUENCE     �   CREATE SEQUENCE public.det_venta_id_det_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.det_venta_id_det_seq;
       public          postgres    false    218            _           0    0    det_venta_id_det_seq    SEQUENCE OWNED BY     V   ALTER SEQUENCE public.det_venta_id_det_seq OWNED BY public."detCompra"."idDetCompra";
          public          postgres    false    219            �            1259    16756    direcciones    TABLE     ,  CREATE TABLE public.direcciones (
    "idDireccion" integer NOT NULL,
    direccion text NOT NULL,
    indicaciones text,
    barrio text,
    "nombreRecibe" text,
    "telefContact" text,
    "idUsuario" integer NOT NULL,
    "idMunicipio" integer NOT NULL,
    "idDepartamento" integer NOT NULL
);
    DROP TABLE public.direcciones;
       public         heap    postgres    false            �            1259    16755    direcciones_idDireccion_seq    SEQUENCE     �   CREATE SEQUENCE public."direcciones_idDireccion_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public."direcciones_idDireccion_seq";
       public          postgres    false    231            `           0    0    direcciones_idDireccion_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public."direcciones_idDireccion_seq" OWNED BY public.direcciones."idDireccion";
          public          postgres    false    230            �            1259    16733 
   municipios    TABLE     �   CREATE TABLE public.municipios (
    "idMunicipio" integer NOT NULL,
    municipio text NOT NULL,
    "idDepartamento" integer NOT NULL
);
    DROP TABLE public.municipios;
       public         heap    postgres    false            �            1259    16732    municipios_idMunicipio_seq    SEQUENCE     �   CREATE SEQUENCE public."municipios_idMunicipio_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."municipios_idMunicipio_seq";
       public          postgres    false    229            a           0    0    municipios_idMunicipio_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."municipios_idMunicipio_seq" OWNED BY public.municipios."idMunicipio";
          public          postgres    false    228            �            1259    16651    rol    TABLE     H   CREATE TABLE public.rol (
    "idRol" integer NOT NULL,
    rol text
);
    DROP TABLE public.rol;
       public         heap    postgres    false            �            1259    16709    tipoDoc    TABLE     X   CREATE TABLE public."tipoDoc" (
    "idTipoDoc" integer NOT NULL,
    "tipoDoc" text
);
    DROP TABLE public."tipoDoc";
       public         heap    postgres    false            �            1259    16708    tipoDoc_idTipoDoc_seq    SEQUENCE     �   CREATE SEQUENCE public."tipoDoc_idTipoDoc_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."tipoDoc_idTipoDoc_seq";
       public          postgres    false    226            b           0    0    tipoDoc_idTipoDoc_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."tipoDoc_idTipoDoc_seq" OWNED BY public."tipoDoc"."idTipoDoc";
          public          postgres    false    225            �            1259    16656    usuarios    TABLE     X  CREATE TABLE public.usuarios (
    "idUsuario" integer NOT NULL,
    "idRol" integer NOT NULL,
    nombre text NOT NULL,
    correo text NOT NULL,
    "numDoc" integer NOT NULL,
    apellido text,
    "idTipoDoc" integer NOT NULL,
    telefono text,
    "userImg" text,
    contrasena text NOT NULL,
    estado boolean DEFAULT true NOT NULL
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    16661    usuarios_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.usuarios_id_usuario_seq;
       public          postgres    false    221            c           0    0    usuarios_id_usuario_seq    SEQUENCE OWNED BY     T   ALTER SEQUENCE public.usuarios_id_usuario_seq OWNED BY public.usuarios."idUsuario";
          public          postgres    false    222            �            1259    16665    ventas_id_venta_seq    SEQUENCE     �   CREATE SEQUENCE public.ventas_id_venta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.ventas_id_venta_seq;
       public          postgres    false    223            d           0    0    ventas_id_venta_seq    SEQUENCE OWNED BY     N   ALTER SEQUENCE public.ventas_id_venta_seq OWNED BY public.compras."idCompra";
          public          postgres    false    224            �           2604    16666    articulos idArticulo    DEFAULT        ALTER TABLE ONLY public.articulos ALTER COLUMN "idArticulo" SET DEFAULT nextval('public.articulos_id_articulo_seq'::regclass);
 E   ALTER TABLE public.articulos ALTER COLUMN "idArticulo" DROP DEFAULT;
       public          postgres    false    215    214            �           2604    16667    categorias idCategoria    DEFAULT     �   ALTER TABLE ONLY public.categorias ALTER COLUMN "idCategoria" SET DEFAULT nextval('public.categorias_id_categoria_seq'::regclass);
 G   ALTER TABLE public.categorias ALTER COLUMN "idCategoria" DROP DEFAULT;
       public          postgres    false    217    216            �           2604    16670    compras idCompra    DEFAULT     u   ALTER TABLE ONLY public.compras ALTER COLUMN "idCompra" SET DEFAULT nextval('public.ventas_id_venta_seq'::regclass);
 A   ALTER TABLE public.compras ALTER COLUMN "idCompra" DROP DEFAULT;
       public          postgres    false    224    223            �           2604    16668    detCompra idDetCompra    DEFAULT     }   ALTER TABLE ONLY public."detCompra" ALTER COLUMN "idDetCompra" SET DEFAULT nextval('public.det_venta_id_det_seq'::regclass);
 H   ALTER TABLE public."detCompra" ALTER COLUMN "idDetCompra" DROP DEFAULT;
       public          postgres    false    219    218            �           2604    16759    direcciones idDireccion    DEFAULT     �   ALTER TABLE ONLY public.direcciones ALTER COLUMN "idDireccion" SET DEFAULT nextval('public."direcciones_idDireccion_seq"'::regclass);
 H   ALTER TABLE public.direcciones ALTER COLUMN "idDireccion" DROP DEFAULT;
       public          postgres    false    230    231    231            �           2604    16736    municipios idMunicipio    DEFAULT     �   ALTER TABLE ONLY public.municipios ALTER COLUMN "idMunicipio" SET DEFAULT nextval('public."municipios_idMunicipio_seq"'::regclass);
 G   ALTER TABLE public.municipios ALTER COLUMN "idMunicipio" DROP DEFAULT;
       public          postgres    false    229    228    229            �           2604    16712    tipoDoc idTipoDoc    DEFAULT     |   ALTER TABLE ONLY public."tipoDoc" ALTER COLUMN "idTipoDoc" SET DEFAULT nextval('public."tipoDoc_idTipoDoc_seq"'::regclass);
 D   ALTER TABLE public."tipoDoc" ALTER COLUMN "idTipoDoc" DROP DEFAULT;
       public          postgres    false    225    226    226            �           2604    16669    usuarios idUsuario    DEFAULT     {   ALTER TABLE ONLY public.usuarios ALTER COLUMN "idUsuario" SET DEFAULT nextval('public.usuarios_id_usuario_seq'::regclass);
 C   ALTER TABLE public.usuarios ALTER COLUMN "idUsuario" DROP DEFAULT;
       public          postgres    false    222    221            E          0    16635 	   articulos 
   TABLE DATA           �   COPY public.articulos ("idArticulo", nombre, impuesto, descuento, margen, stock, costo, url_img, "idCategoria", descripcion, talla, "precioTotal") FROM stdin;
    public          postgres    false    214   {\       G          0    16641 
   categorias 
   TABLE DATA           N   COPY public.categorias ("idCategoria", categoria, "subCategoria") FROM stdin;
    public          postgres    false    216   �\       N          0    16662    compras 
   TABLE DATA           ^   COPY public.compras ("idCompra", "vrTotal", fecha, envio, "idUsuario", direccion) FROM stdin;
    public          postgres    false    223   �\       R          0    16725    departamentos 
   TABLE DATA           G   COPY public.departamentos ("idDepartamento", departamento) FROM stdin;
    public          postgres    false    227   �\       I          0    16647 	   detCompra 
   TABLE DATA           u   COPY public."detCompra" ("idDetCompra", "idArticulo", "idCompra", cantidad, "precioUnitario", "vrTotal") FROM stdin;
    public          postgres    false    218   ^       V          0    16756    direcciones 
   TABLE DATA           �   COPY public.direcciones ("idDireccion", direccion, indicaciones, barrio, "nombreRecibe", "telefContact", "idUsuario", "idMunicipio", "idDepartamento") FROM stdin;
    public          postgres    false    231   "^       T          0    16733 
   municipios 
   TABLE DATA           P   COPY public.municipios ("idMunicipio", municipio, "idDepartamento") FROM stdin;
    public          postgres    false    229   ?^       K          0    16651    rol 
   TABLE DATA           +   COPY public.rol ("idRol", rol) FROM stdin;
    public          postgres    false    220   !~       Q          0    16709    tipoDoc 
   TABLE DATA           ;   COPY public."tipoDoc" ("idTipoDoc", "tipoDoc") FROM stdin;
    public          postgres    false    226   >~       L          0    16656    usuarios 
   TABLE DATA           �   COPY public.usuarios ("idUsuario", "idRol", nombre, correo, "numDoc", apellido, "idTipoDoc", telefono, "userImg", contrasena, estado) FROM stdin;
    public          postgres    false    221   [~       e           0    0    articulos_id_articulo_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.articulos_id_articulo_seq', 1, false);
          public          postgres    false    215            f           0    0    categorias_id_categoria_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.categorias_id_categoria_seq', 1, false);
          public          postgres    false    217            g           0    0    det_venta_id_det_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.det_venta_id_det_seq', 1, false);
          public          postgres    false    219            h           0    0    direcciones_idDireccion_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public."direcciones_idDireccion_seq"', 1, false);
          public          postgres    false    230            i           0    0    municipios_idMunicipio_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."municipios_idMunicipio_seq"', 1, false);
          public          postgres    false    228            j           0    0    tipoDoc_idTipoDoc_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."tipoDoc_idTipoDoc_seq"', 1, false);
          public          postgres    false    225            k           0    0    usuarios_id_usuario_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.usuarios_id_usuario_seq', 1, false);
          public          postgres    false    222            l           0    0    ventas_id_venta_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.ventas_id_venta_seq', 1, false);
          public          postgres    false    224            �           2606    16672    articulos articulos_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.articulos
    ADD CONSTRAINT articulos_pkey PRIMARY KEY ("idArticulo");
 B   ALTER TABLE ONLY public.articulos DROP CONSTRAINT articulos_pkey;
       public            postgres    false    214            �           2606    16674    categorias categorias_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_pkey PRIMARY KEY ("idCategoria");
 D   ALTER TABLE ONLY public.categorias DROP CONSTRAINT categorias_pkey;
       public            postgres    false    216            �           2606    16731     departamentos departamentos_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.departamentos
    ADD CONSTRAINT departamentos_pkey PRIMARY KEY ("idDepartamento");
 J   ALTER TABLE ONLY public.departamentos DROP CONSTRAINT departamentos_pkey;
       public            postgres    false    227            �           2606    16676    detCompra det_venta_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public."detCompra"
    ADD CONSTRAINT det_venta_pkey PRIMARY KEY ("idDetCompra");
 D   ALTER TABLE ONLY public."detCompra" DROP CONSTRAINT det_venta_pkey;
       public            postgres    false    218            �           2606    16763    direcciones direcciones_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public.direcciones
    ADD CONSTRAINT direcciones_pkey PRIMARY KEY ("idDireccion");
 F   ALTER TABLE ONLY public.direcciones DROP CONSTRAINT direcciones_pkey;
       public            postgres    false    231            �           2606    16740    municipios municipios_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.municipios
    ADD CONSTRAINT municipios_pkey PRIMARY KEY ("idMunicipio");
 D   ALTER TABLE ONLY public.municipios DROP CONSTRAINT municipios_pkey;
       public            postgres    false    229            �           2606    16678    rol rol_pkey 
   CONSTRAINT     O   ALTER TABLE ONLY public.rol
    ADD CONSTRAINT rol_pkey PRIMARY KEY ("idRol");
 6   ALTER TABLE ONLY public.rol DROP CONSTRAINT rol_pkey;
       public            postgres    false    220            �           2606    16716    tipoDoc tipoDoc_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public."tipoDoc"
    ADD CONSTRAINT "tipoDoc_pkey" PRIMARY KEY ("idTipoDoc");
 B   ALTER TABLE ONLY public."tipoDoc" DROP CONSTRAINT "tipoDoc_pkey";
       public            postgres    false    226            �           2606    16680    usuarios usuarios_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY ("idUsuario");
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    221            �           2606    16682    compras ventas_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.compras
    ADD CONSTRAINT ventas_pkey PRIMARY KEY ("idCompra");
 =   ALTER TABLE ONLY public.compras DROP CONSTRAINT ventas_pkey;
       public            postgres    false    223            �           2606    16683 %   articulos articulos_id_categoria_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.articulos
    ADD CONSTRAINT articulos_id_categoria_fkey FOREIGN KEY ("idCategoria") REFERENCES public.categorias("idCategoria") NOT VALID;
 O   ALTER TABLE ONLY public.articulos DROP CONSTRAINT articulos_id_categoria_fkey;
       public          postgres    false    3228    214    216            �           2606    16688 $   detCompra det_venta_id_articulo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."detCompra"
    ADD CONSTRAINT det_venta_id_articulo_fkey FOREIGN KEY ("idArticulo") REFERENCES public.articulos("idArticulo") NOT VALID;
 P   ALTER TABLE ONLY public."detCompra" DROP CONSTRAINT det_venta_id_articulo_fkey;
       public          postgres    false    3226    218    214            �           2606    16693 !   detCompra det_venta_id_venta_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."detCompra"
    ADD CONSTRAINT det_venta_id_venta_fkey FOREIGN KEY ("idCompra") REFERENCES public.compras("idCompra");
 M   ALTER TABLE ONLY public."detCompra" DROP CONSTRAINT det_venta_id_venta_fkey;
       public          postgres    false    223    218    3236            �           2606    16774 +   direcciones direcciones_idDepartamento_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.direcciones
    ADD CONSTRAINT "direcciones_idDepartamento_fkey" FOREIGN KEY ("idDepartamento") REFERENCES public.departamentos("idDepartamento") NOT VALID;
 W   ALTER TABLE ONLY public.direcciones DROP CONSTRAINT "direcciones_idDepartamento_fkey";
       public          postgres    false    231    227    3240            �           2606    16769 (   direcciones direcciones_idMunicipio_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.direcciones
    ADD CONSTRAINT "direcciones_idMunicipio_fkey" FOREIGN KEY ("idMunicipio") REFERENCES public.municipios("idMunicipio") NOT VALID;
 T   ALTER TABLE ONLY public.direcciones DROP CONSTRAINT "direcciones_idMunicipio_fkey";
       public          postgres    false    3242    231    229            �           2606    16764 &   direcciones direcciones_idUsuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.direcciones
    ADD CONSTRAINT "direcciones_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES public.usuarios("idUsuario");
 R   ALTER TABLE ONLY public.direcciones DROP CONSTRAINT "direcciones_idUsuario_fkey";
       public          postgres    false    231    3234    221            �           2606    16741 )   municipios municipios_idDepartamento_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.municipios
    ADD CONSTRAINT "municipios_idDepartamento_fkey" FOREIGN KEY ("idDepartamento") REFERENCES public.departamentos("idDepartamento");
 U   ALTER TABLE ONLY public.municipios DROP CONSTRAINT "municipios_idDepartamento_fkey";
       public          postgres    false    227    3240    229            �           2606    16718     usuarios usuarios_idTipoDoc_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT "usuarios_idTipoDoc_fkey" FOREIGN KEY ("idTipoDoc") REFERENCES public."tipoDoc"("idTipoDoc") NOT VALID;
 L   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT "usuarios_idTipoDoc_fkey";
       public          postgres    false    226    221    3238            �           2606    16698    usuarios usuarios_id_rol_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_id_rol_fkey FOREIGN KEY ("idRol") REFERENCES public.rol("idRol") NOT VALID;
 G   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_id_rol_fkey;
       public          postgres    false    221    3232    220            �           2606    16703    compras ventas_id_usuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.compras
    ADD CONSTRAINT ventas_id_usuario_fkey FOREIGN KEY ("idUsuario") REFERENCES public.usuarios("idUsuario");
 H   ALTER TABLE ONLY public.compras DROP CONSTRAINT ventas_id_usuario_fkey;
       public          postgres    false    223    3234    221            E      x������ � �      G      x������ � �      N      x������ � �      R   #  x�EPKN�0]Ϝ"'����,A������L�5r�։+�[s�ł���o:E�I����+ڸ��k4�-�A� �gs1���g�ά�3q����
X�g�����"��gU�e�M�
�.�R�bGx����
p'A�ꀓk��^� 砜=��zF���F3I�׮��(�!uW%x3I�T��.Kz��/�jh+�Q�v�՚�)B��N���\���aѩ��R��mM�q���=��Ew���B�J\��Ohִ�R4}��pS�A�M�6�+�5���ut0�Y��b�_�ly�      I      x������ � �      V      x������ � �      T      x�e\�r�Ȓ]��B?07D⽔��~hl��M�)(@� #������B��w1�L���'T���df%��~o�~�����\���ކ�˛~�!PSpU�g�i�}?4���z�T��]34���?ή��G
��j��}v���8Ȇ����%������,�g�'�/t�z�x]��]���b]>V�P�Q��"�.�T�� %|�a3�Di���n��3S���G����#Bշ���ޅ���sy̋z�'cf��,��������k߭�g]lC����4�����,���z���<�Xo�uc����g�N�$D�/�m�m�~|}�7��^8^D_�M�����נ׈9��߮8�����~�H���mc �^`A��r����¶�r kj���tk�컳wa��49�~����Fx����ήڰ��2z=�uh�_%��7�)�K$�^�[��p*�g?~?{Y�A���Ѐ��N�k�I=�kJ�h���h��u��k�SF_B�nl��s��0a%��
J�ω�.17҃4�.��=�D/&�uE�IS���a���Z��f�˰����ͣ�W�o���E�j�țN��^c�[�);���[�f]d��m�¦��f��C��3��j[����
]hð�5��z��5[���l|Ӽ]�gh�u�y�w�����>a�he�sP�b�kJ��;��mx��S4l0V�%� ���p���]_�C�	����wU��i��b�	2������A
��=蘠$��Y�9�!��i[^,�	�Ɩ��rE���o�E}l��F��	o����+�jF�T!5:{;5���]�j5�}G�������g��,A���vc���K�r�O	%��b��v]��;l 	��`�4�eF0���w�IjR�=�rQ	K؊i�g/`���@#u~���:��;_@��x�p�ь�0�8�3�N ��=M�C ��o���n�=��֫�m{	d�W-T�|qΙj7>����0��,�F��q[�z���Q��p_cO�J���34�.%ܰ;4���)[WW�
0���ajܰ��
�}o`6��ٽ���{���a��a/w�@{3P�oD_����悍��c����h�_H��	���,��l�h�ڳW�1�;��J��鵙�e��eFb\P�6�׻f�Xv�a���c�Ұ�Q��#l�m�L��zdkgfFj��GΌ
�)�<������q=_�"��W Sk����s�	���՝�k"��It5���5v_8�j�ݹ▢�=����d�:�X��E�l��@ц-���N\��������B�[�s9L��a����S���a�O ����'���찫;!7��"�?
���ς�]o0��n� 3
e�7)\a��Tߩ3���ؚ���	`3p���8���}��~u�$�f-��@�v[]5���Ρ�ڰ��O6�`��7P������G��� .�j�|,b�E��z���$^�f�0P�$�aL���!�E��ëxK�@x�f3����I�ه۾�V��C���Ǹݱ�A��I���{\�p��m&��7��Bpi�04��oMh��vsl�uU$�/�*i��������ۆ�F>�D��D����M�S�zSLR����(K��8���Q=�x��^�bg���iֽM���S*���n��8�E���rh�$��#��<�F�Waeח����=�4v|���x2Ƥ˪��t�m����J�c��K_����F�1�Q`1�L����ŉ�2s�.@m~��ڻ/A[�Ex'[{nA��?DK�"��M�ӞMt���]���2����vE`~����s�h"#S݅��A��X��_���R����nƠ����Y��'l����}� Bg���o�2�Yjp"���[��ݭ*��yIv�c���e�8W0A�0�41�j,��8����;:�$�+���� �����z�
�����8��m�a&�
&�[�ս�'@bW�菃�խj�-Y1��ö]3�����6 ��c�`�m���H�&ʢ�j�I�������l��A��%�����?�J����^t���0T�`9�
�a�t�<X
fe����4�|ԥ��	�:��\��N`��
�*2X1wx�x{�8x��W��)=�,�h��(�D�<�h�1��|�����;2�P{_ �2��;�}�
�41���~ c}��P�\����W����^A�p�9��!��gBܹ�*�q������y�?K�HT(���ځ��M���X����������S�!� �qa����ܡ�������;�(!�S=ߗ�3�V>Sb�n�����ۺ�\ȁ���f�C�z�9���<ѥ%��N>�$�5[�ue��D���������w��f����P>Ķw�)ma��"�||<켘l�X�4�����s7�Ǯ���oO~��}�0���i`�t&�}l`+�s�o��d�02���w��m�םiF�������a���~���p��ٟ��.JY�`���j�K�����L�߄ٴŠZ����A%�?va�{����%����Kn���^Dr�P�2�\*�`�2���[o�r��-����ƞ4Pz�k�&���(��s�ØF{��9�XE�b �#[!������c2�� ����{�X�0V~_��h�o\��&��Bt	�'��,C�`�aD��6��a�Y��JP�nz�~SJ�7p��]ݍM{gZC�nC9T,���%%�w�fK�������ar	5{0Crk)�P᝴>R���Z�� e��;ܞ��o7I�!n����Z��&�`�Ǫ��2�O��1!����>|0	BPK�
��qHxDIt4��)���f� �LsͿX���b��C�o�l	����FN/qIW�%�[�(���}۴&X�r[�A�̢�0���ѣ��N�cL15�,e��ՖT ;O~w~��r�ܛ�vo�X��y���<�$���{�|�f{c�z�J�za2�>y�N��{�ߞA���9�NT/XD�����.� S�IKŰ����UW5����y�KQLcO3#�<sL����Z�̔�^"	L��.�`�Q���44�����;���I�p۬h^J�u�Z�ai��3L�'B(�k��� �}�E$�"ZC�7��>7G��o�ϕr]����m�`B�����%��3\ʱ��!��kco��p�Q߆��wy �Y�ϩi�Ro0c�c�gL�;~�RR�c�5`K�5ٽ$�	6�ᅜ�����>oD6��$���_�y�[�ށ7Y�h`6��}�,�0���QI��N0�f�{2�nW�#P�=Ƨ;�;(�O��׺�E�~���`�\���'�70��t .O�iI���`�(��x��F�s`��-��B����	��%	�۴�~���'��ʾY5J����t��ɒ[�l9���3��m3s4�qznA��@xafs��y�����S�{���1��@�C�}��0M=}f�T��P�l�r��^O0t&)d��%�����l� ��uUkk�ո�u+v���:���R���`]f~�ծ�wLtL�<u&����5,s ��7�h���[u@$�9�-N��Ÿ�)��;�>�a�`�Yy� �&ܱ��$�@`�~2�i���`�3�A璃�@��u!?�:�E���?��g�?��q������$gb<+�T�O�e�����D'�o1z�NK)y��.�>'OdJ[�z�c~J�rz����s��(�ާl�f?�!!Y��z!���HUh)Mx5<Ye|jPٙ�KPF���ħ�<��kz�������< ���-{�!(��fs��m	R
�{�4!T��Y�В�X
���id�R�Sn�ׅy�	��a����.�g�F��x�M��p��;��Y�&/=���M�0����hO��Ų����S�� ���gg0>94>##���Z߇]mo�:��%ɸ���E��v����R��huPb�%Y9�KQSv�x�p�&[uaAC�bh��v��VP�NJ2�0���=L8 @��,yL�1s���Vq��z�)�w� �  ��I�C��V��f� �y���Gg"b��%��%�'N�;���%NmMc`t(A6��
��kZ�]D�̉��RFi����h�w�t��z
6�dy,
ѹ��1��G�:I�f�oo0=0� ���ad������A�]X�r\L����� �A^����߾�)�}�y�0ь�k
S:�u�	��"&�-�i^HRW�n^Ɍ��{�90Ƃ�T{�`��p�lx����~�	[�h���*��@g�e��Y�'�?�o�yp�����y)���'+���^n���&r���V��n����O��w�k�)$�p3��E0�^��f��$Y�����$��}�}��*A���p���y�?}���|�⻤p����(�D�
���d�����~�]hv6w������5T��҂�ʖ��Q|�n�8���;��ScU��[�oi92��a���ȵ	O,��4猃%(��2c�`����)m/�W��j*A'	��{���­�fm�I+X+�ӌ�9�j>��$gz�7`�����'�*�e�2r	��ZZ�leU��6����j�;ZpL#l�8ml����LE�k�2@�׵*[��8�d��%�-��B0�\� ��ua��>ʖ�;��t��g��f��}UD��S��z���e�F:�˷kZ�@�!����M��na�����a�~���f�2��N���3��gQS7��>��O6i����_f� Ӕ��ʘpClr|J�\	z�]X�8%Cs�6�qG������E)��U�����1�Ƨ��lA�ñM2�,v`��:	��;y9�!�)3A�o;U j������tɊ-�,�`�H�<=Y���cE ��G�ـ��v��i�}P��0�c ���5���R�8��� �LC�H��Ȁ�t�A=&#�n��Y�D���`jgg����OF|����~e�i��D�P�㝁�\	�akw�̪��~g��XI�Z� P ��^!�zװ�L��	�&��F��򙒩ͪ�1�GBc� <q����2��������Ox������îg-���$�*An�hMX�VX�UK�7���;KT*��Ԩ��
M��`���jb�G�Y^�*��c|-�2���MFp��|�}|7

4="��v&R���U��!?g�P7�U0���x�`y�� �6-���<+ȂČ��ÚT�(��f�$�Rc.M��Ti�S[���*������;�0�8�a�����C���6�8�� %����b�ʚ�x `0u�Pw�3��:�$R0��yنd`¾c1BWu�J�Cvb�uayZ"(�%_����.��A��1as�|o0aQ�/"qzL�Ӝ�y)aU5+x��q����Ҋ�����NY�+�����<�M���1�*���n1E���?3��\�x�b��VJTW3K���j��s�r����JP`�<ݮPN��X�
�"-c�YEc"���C�ah;Kmi��"� ���|==�Ρ���������g�=w�/XYj�c��Pу	���nV�2X������	�k6�����RV�kU3��e�rdڽ5h�L��4�=d�&� �Yŝ_-N�er��{����h/)�Ο��U�2w�5���D�t|9Yzm��:4�G���ĵd���hm�t	)����$�5\�u��2�J@~s�3c$�?	h�{�Z��Rg�B	ÆI�1�I���P����y��RS$�{ۺ�R�k�R�����*��I��E�;���՝&���pb'w��J0oG�`Ji7��=�D��4��P5%��,Ez���v���c��-x��뗬S�׍d8G#��sW!H�Wb��JN��E1!���
�a��,ۜ�E��ug`�|���K9P~-��Y�$��~i�P��z�0��_+��
�,�W��mc��	��Eź;���3������E˓2@	���v���"@w�Y@�v:�R�h�c����y8�ݴ6Xjn�vY����˅�$S5_��(����"(�M;�'m;� ���������~|2d6v�/2,8����$�,�C贷�G������\mPB?�l�������Fe�&��}ΪK2(V-�L@I��>0,L:0�w��՟�Һ@���'�=�'R�;nm~�AI|<�0A��?J�}W���d�;�����C�o{f��6���10<퍩 P��&��S٧�K+��6�i��Wd�'��2������-�?2��N�(ic�Fz���/�{�kY�L�r9�� �4�0�Q"#���0S«;��y9�a�=ڄg�NFľ� ��Ў�.�s�?�"*#+*,��
����5�0䪕8�Y/��D����O��@����m�v~�[�<�X[�_���0?)Y3Iq�ra�y����V���sx���`<�}�(���0�O���Yq�$*�s8T�l� (��#Fd����6�[�M�iuAȬ]�+��<�\I�,�̡�wJ����	����"$���(�����n�M�w���è>�Y�5�VGp����K&s�k��$�	���x�y��h7�������q��XE�8=�PJ~#�q���!���*Q�s,4P P]�o9�B��2B�-�X[ý�X4�>�L�Z��`r�� UM�^���R���/����6�7V���1������ ��5����.U�����ѳgc�a�*��c� �>I�`�R=�a�q�|�M�a���C<I�&q��u�*�*^��w�I���-�T!�FD��Ͼڔ��w�sa�.e��\}x������1�6��<$l	y0�k��j�2�~��������Mi	����$�;ڕ��>~��
:�X�0�e��+��q��b�����^R���7J��<���G��:;T��B|���$9DR�.�LUI��̞�\¥�{����W�V7��
���P귗�"���m�� ��<���
�x��Km�:��K��<S�k�˃����G���Ha����\ds}�d��X���/A�$aS��jR%�D�㧟�s��ţy�r�ц�J��o~i�p[ �
FC�!�&X>�,A�Ź�Z��1]�9a��'	[Q�JZ�D����w�(��z�9z�S"�򬂩}j�b.�b�٭�Y�ά���h
����k���P˥;��lXXנ�#�$��2�����s`2�-�y��ܟ�����cªd���9]����A8'w��C~��L�E��������3�l�lӇ��f�C����O�������LT��&*��RؾBl�z�����1�g�TÚ��c�M�g�S4�Ʒ�ɇ�&�4	����/��7�&(O���b�&7��2U�x@�@�.iS`N{���J�������R !�&�}Qj��0,����������y� ��g����g�i=������b��Ş��![�A�:|�:|3��f��p�fhu!��L�Z�9)/	��#�w����ے��I�˘-��/�L��/�huI&�p��|	���� �`��V�%lћ+����<������h��5�~%�i^y�MB��ne+LB��β� l}�`��㫊���[S�/gB�q�f��#��3���P�����jo5cNU�4�1�Y!��	R��߇�����4Z�����`��On�:�O������p#+X�<��� '�v�$̈́*j�f	ڗp��6=~��-��pzL�� ��}��m8?5� X�����S;=W}���@� �*V�\�_Xz߄�8�pr`?�i4�y�m�_������fdQX��n~���O $(ϟ}Ve2��J��GqL �du�ϝ��>���0�~}�J���`d�s��`�i^�'���0
(i}�������`q�E����K���g��q���U���1�5�.Ɍ܆��\��>`���K��NL6�|��)*sB��f����U,�C,�M��]��sد�4�h���]�Yv�AoeI�����[O�a9�ٝ�O+��'����������F      K      x������ � �      Q      x������ � �      L      x������ � �     