PGDMP     ;    &                 }            bikeDB    15.10    15.10 L    Y           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
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
    public          postgres    false    214   y\       G          0    16641 
   categorias 
   TABLE DATA           N   COPY public.categorias ("idCategoria", categoria, "subCategoria") FROM stdin;
    public          postgres    false    216   �\       N          0    16662    compras 
   TABLE DATA           ^   COPY public.compras ("idCompra", "vrTotal", fecha, envio, "idUsuario", direccion) FROM stdin;
    public          postgres    false    223   �\       R          0    16725    departamentos 
   TABLE DATA           G   COPY public.departamentos ("idDepartamento", departamento) FROM stdin;
    public          postgres    false    227   �\       I          0    16647 	   detCompra 
   TABLE DATA           u   COPY public."detCompra" ("idDetCompra", "idArticulo", "idCompra", cantidad, "precioUnitario", "vrTotal") FROM stdin;
    public          postgres    false    218   ^       V          0    16756    direcciones 
   TABLE DATA           �   COPY public.direcciones ("idDireccion", direccion, indicaciones, barrio, "nombreRecibe", "telefContact", "idUsuario", "idMunicipio", "idDepartamento") FROM stdin;
    public          postgres    false    231   #^       T          0    16733 
   municipios 
   TABLE DATA           P   COPY public.municipios ("idMunicipio", municipio, "idDepartamento") FROM stdin;
    public          postgres    false    229   @^       K          0    16651    rol 
   TABLE DATA           +   COPY public.rol ("idRol", rol) FROM stdin;
    public          postgres    false    220   y~       Q          0    16709    tipoDoc 
   TABLE DATA           ;   COPY public."tipoDoc" ("idTipoDoc", "tipoDoc") FROM stdin;
    public          postgres    false    226   �~       L          0    16656    usuarios 
   TABLE DATA           �   COPY public.usuarios ("idUsuario", "idRol", nombre, correo, "numDoc", apellido, "idTipoDoc", telefono, "userImg", contrasena, estado) FROM stdin;
    public          postgres    false    221   �~       e           0    0    articulos_id_articulo_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.articulos_id_articulo_seq', 1, false);
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
       public          postgres    false    223    3234    221            E      x������ � �      G      x������ � �      N      x������ � �      R   &  x�EPKN�0]Ϝ"'����,A��������9v�ĕʭ8�Y,�=����S����;����[��D#�b$@-�p2g��}6���97꙱[��5xV����/�ݯzV^�\%�� o-�P/v��j�.Q/0� gq4�8��k��r��C>/��a�X��h&	�ڕ��8���&I�����eIO�a�i^m�8��N�Z�6E�r�I0?ߞ��v>,:�ܣY����9.q��纠�h`XӫA�ԉ��	͚�q@���7�anj:��I�f-��x�!��f8	t�W��)~z"      I      x������ � �      V      x������ � �      T      x�e\���Ȗ�1_�?�7���l�FMH�^�6fb���� .@0����XO�cܐ7�l3�ٺ3@�N�Wp��^�ܭ���G��e�����*1��zpB��Y���Fo�C�6�E94W�vuWUw�F6��z8�W7m��ۊ����20�UCs������G���6� z}�����:X,��ӷu=�c������jZW#zJ��/��P��o����gz���G l�'�T�C��[����U����<��04�#g'�e >��}�Eq�{�mN��;�nvU����4���A�,���z���<�P��Mc��0W����EI�^���۲��:�Xo���:^D_�m�o/��+{���h��J#�1�=�Aw�ы��5��֦�R 嘑ݾ�Ք`�P�6��-��}w��:4G�\G?w�A3$��^���ꧫ��:��d���M�N{�OGoSeo�$zכn3������_�������
"���<���Gej����\SSa�ƊW�mE��o덮)�/U�il��kL�0aI��
B�_��+]b�$i�x}�%�^L����'M1͸퇍f ͢�ժnV�:�~^��|h��<-�W��tBe��j\�u�K��2�%[Do�v�&9[F���Q?��6I�8Y����jت�'�N߻f��f6%_m�n�7�Ⱥ�l�����JTD��j�h��3Q?@hb���������35l1\�%����p�v�b��NӔ'@ݺޯ��D�Fϐ��"1t|�<��C%��i%�MP|��	�5�&&�i[��(� �C�/R��M�FR$ч��l�0�VrR�8�¸�ͨ+$RWo�F�V��V���H�����ךn���C��wc��Kn}�S	y�B�Kmú���P"���4�eF0�<�܇�I�R���qm	K�iSm�^Pq�����Z��4}x�������2���U�q�k5lNuBI9��Je������!���n�^�T���̘�/�9Y�ևR��|Q�JZf���mW�z��Q�B����ia(��FkK���xH���x]��׀n�A#jC�z�V��3���]�y�o�u{�J�vw��`zk�ү�2@�k�AwQ�{VvYrVJ���ӄ��w}i��M���zE�!#����*��m���o�+*�s\YAm��c��$�}��a���c*�j;5��?��Ҷu�����/~��f��nN!�jT��B�A���Ȇ�#��-H�
��ZC��� C��D'����10�`d�w�0h�;���ݜ ��C%�S�&�mVVL�������f��M��
h���a	�f��Vf��5�i+���B��w�s;LO��򰃡x�.8K�0�mJ�O�(�B���;!���(k�"���_u�5`|U���U������M�Q��R�A�m�.�(l�PT��N�I܇��� Pd�(��^�]�EwM���@�Cz�u	`-�d��U��E���]����?�V6�YO��E��~�|@�5�=6��%U8TEID��۟��m+���/��.4۩��M� �~x�;v���~���ku$��%���X��N��l�꾢�\�����F�
�V��ʺ*��q�����mvޒ��ձ��%*���|�`wã��P�)Ɣ�Ї~�6a�?jX��X?�yX#�Ʋ�����f����.}8��ô�0ƶ����gq�1�6'2Sx�mE�%ێN��diF�ZY�����̴W��Z`?�$P��0��k *��N�?�H�$��DF�`:�h���պ���/X#漁�����kf����;��M���	�egw.(:t��3^T~��s�.L�o���Mp$�)AT�[Q���W����.zd4]�� �J8砠�ގ���f�@�0�{�_�n���� 1Vl�{�"0R���N�{���'cdC`^�k����=8����ڼ��ѩ G�v�:Iڗ*�Kf�TN��c��������� /��t�;��h4��;�a
9�OA_�E��U�V��R?��lw��ð!\�vY�4cq_�~t.f\\}�_Tېh�N��'��~�L��Fe��M�w����F�9�	֛K8j]=V>	0`R��j4�����C��F�2
�X�K�}��A��gpo�H��g�J�@ d�9�;�L�k�FW��v1���|y���l�ו��,]9؎2.ƌ\����Ƞ�~�B����%�+�����#f�>��©�ڇU?���ӈe�)�I�������5c�S�9}�̅⎦��.�������R.�
={_F��wӓ��vh}oÁ�����n+漄D��8�w�"{Ǌ'�G�GG�`i�'�*�pav��x��	���&�d\�vW7��y��ޮ��b�W����~�'���T��/'�JhG���W���H���\)�H}:�%��S�ZBz���]RJ!�����W�ɮ9/I����mޏ1������Y;^>OQ�1���E�c��3�vߠs����p+u�A{6И��?f�ߞ�ϖ<�Y��	��� D���;�6��Ky6��o�ѯ�A� ��"��S����Ԑw��[��A_=�<��|�UP}1,u����K�{����!�O��K�9Pj��q�b�'��[Ģ��1έR�Qc���|��7��+���pjs�T�'�Fn�C�p�<,-S�1�b?��l��������X*�z��g2�F�e�޺?��cA�q�X��B,�+��Q��]= ��(ѱ�h��a��C�����nf��dp�0 �tF����r��bݍM{4"�a�*�ZH�� R%W�*MDz}�	F,�y�	5��P�Ih��hZ+�o�6A� �8_����v�� �L&��
M��O�ᒶv��3����1Ɇ}�fİ�?���,&�Y�Po+��0s)6�xdhJ;�wcs~9����Lɰ���04�K�6/�2T./:��i�X��[�BB��U��@����%��90g�FTְ�����W��.����������"�6��"g#f��{b��9e��i#���"}���t���GO ��w�K����ш~Pg.�p��;B4˰go`Nэؒ�5Է~c����mp�<�&�P�&Ϝ�.]MkK��R�L��i`N�	��2�w ..C<1e�{���H�٫��l����'�6�%	LGeD|����mn�C��G�%qQE�Ź��$��|A����Cao8MO�����y� �r��xc,��,<a2���U��#g�qb�}j����12С&��:~�y&SЭ�7�[�^ٵ4H|lQ��g}g�Qzc&�����~o����&��Y�p�F��^>����ਤw�Dw6(d�����L��Ǘ�����), dJ�lS�eQ�sW�r7X}���-����meR�����N�z�{��y��F�k`����*CTLj`��s&���vڸ"���[��oV��j�*��0�\N�(h|&2���C�v�B�^[ĸ�N^�
��<��N���W��6��Sc�}VO�,�7�c�z���R��Li�l�9�][o&�<c
�;sE�t����mz�S��ں5������3�	Ŗ��)�`�f~x֮���:'m����0ЙX�@�7o�+�������9	rq��[�o�%z���gW,]4��d�!x-ܻ�=�nn(���|�6�a � ��#��j�ώ�p}���wB*��+7K$a�~�f��Ѥ�Xh�,�����V�)+��{@�Z��s8֜�\\ޒ)'�����/5��m5s���l6���ԛ�(������KX��N��
.M4^4b�g!
� ���Q<)��j5����9�[���aL�Ѷ��2QP�M	+��Ay�:�:�uBHv���%S�T!1u�鯑�Q��S�/��0�5�p��
����w���5?S;l�Mo|�G������/�q�5Y_,/��<��߆�@ٝ��Ǘ��W4�����j_ۋ¦]$�d��~t�Tn/��� �ë�:�1'�*�����
o�    ���]5,(pn.-�%0����Ѩ�p���0����c`��y�,�=O�s*� ``�3��~R�H�������Y�@;�G�ǌ�8�k�%����A���N�mO�H�Mc��RL6�OlZ�]D�ԉ)!�R�L	#O���쩲���D9��T�h��hE'�"cF	���+�a�p:�mA��=bp�(�S���a;Y�pjMR��8�Ç�
�w��C�ss���)��DSV�N9��a&8��b�[�VXQ�7��1,iF���-,����-��g�W>B����0�i�m{���>E�.C��e�<ZU���S���t����ٙ������,�����TmgəM�m�W�v�b�~ȓ_!Wg�ܒp��au8�i��wǅ0se5=ctc8�ĺ����k�	)!�+<v�s�?瓝�o
wgZ��"Q��ޢ`�݄�f��Y��Ѕ�W��f���d�w���D�^���%JM־��B��3,�m/ߐ �����/f���J1�$ʞֈ�!i�\���"�C���ZL)_������@z���e��ZCX-(
���=��t7C�1ČT�Kn�S�iNK��LC>�ld�RmN���3J�=j��7�܌�m�j]-8��z��>PؕPH#����3@څ,[��L�q���0�-g�B�PY!��uվ���-Y!�j��t��tiƤ�]D��S���z���%�F�;�øoZ�C/{���������Øկ/9����Kӻz�xn4;���g��GbS7�����|���H�n��82��Z�d���ʧ5�u.`��GW3Q2�w�h˚iɒ���w�2e�����'ȥp��������ǹzN� {X�=�A̄���!9%��gD�/��ݎ  �G���y��2�5̈@7�Y^�n�����`#vR+| �-_� b��P��P��e���Rl�#T��lP�������=��U1���6~OF[��@��"�\<�����U�V�;x �$�G��+{X�7v. T2wy4�_+w9��ʜ9�c�W�?�i��!͌'�a���`9�r����dP��J�:a1y�)Y*N�sVt)�᝾�\^�� h[���[IB��X�B<h�@m�`>ތ]� ���{��.R�"r[$F}�*
��Z��q�{(.�TnF�W�ŜiM ��#/��Ĭ� ���fzC�x]0e�x/+���Gy؆|;="�]#��R����!�fuS7��ʠ�[�"G��2�cܴ�BjyV3u�I��ÚT)�^����4�q�'�A�8k�Sf��B=�5Y2Z8��m��C��Ck� t��ֆ
�%$�$X+��G����p�ڡ�g4��ʦ�D���q��}�"���O*��Յ�W��Q��sU��`�d3H"�l��Տ�U�:��� a��CV�k�a�*|q޸���"s	3p�SM�ml8>O��*Y��y�Mi�sD�KLX������¢pj���Rig�Z՚Y�fT�U�^���XA:XD�U�t��?��6v�v�*��sՆ!�,��_X%ؕ�XB{z�As�*�l[����c
Q����Z�x���/��02�t��=���k��w[4��6�>���h
UΣ=f�d2��4���75�� B��g�r��E�M;9���r~7�MR����Uń��v"��D�k�+_P�����c*�s��r��X)��D��_7r��s�XkDq>y��%S�tZ��΅ل��X�%�]��U$N�P=%�,&���	x�ޮ�剾Հ��%|ۺ���l�4T���h�	���P��"zϊ"G��:T��s�@8�3B�~E�M�jQ1���c�e|�0�Bu��������}5��0�s|��D�lڈ�z���a�hC�"��W��L�<�J_�Iω̞�#9�]FT�E6Pz���y���,�����z)���b�2�HBd�MD&5���V��S-��,׹����?&P�j�6��!�g�W!�X�ɩ�E����yu��z[��	�Nz����.��<����\G(�C�j�O��&��F+`�`OMb����iZ�Q"��-I���W�c�M��趹
�?�]�ˠ��!�2T����� ��
V�!�:�$�������6���m7�X6�5�f�M!��=�Wg2�֭����D0�,LE:0UspBQ��oX����daQ)=gaJcw���W%���	��u�/�S+���*50.sg��q�_�GJDAӷ�|^{�Z���N�'����?��RZ<��m�8�����'�38�ҹb�bk�!��s}��룶>70Pﰲ�z�v���-���U�'��h��և��ĒQh�/�Ŗ<?��r��4�j�}"�2`�u��� 9�U����aQy�c��T0ׯYJO ��rN�9K{�OOD��>�;���Ӯ��Ξ�[�<�]����/j�)�/�t��Q�*%�:�طO���+�Ƚ��q���ŀ�*Ũ�fġ*��oa?�\1T{@%`eI�&<�>I��B&�/�63g�V_���.:~j%�Ն�٣_���uR:{�2�Oi��f�6z'R<SF}�"̒�A5B��#U��L[t�ʢ JZ$;LZ\6~ޭ��2�QD�T5±}�6��+���{��w���F�Q�|WQ�����B�}m�ى�q���T�ȅ����7��{-����V�+�\$KD���P�L8S�j������~�щ!�ž+`��,C��/��Z���x��ۯ�υ�ѳ�c&k�X�(ܳt�Q��a(]и��S��	c_��T�Y�x�i�(�O܅v��dk�-^�y�s	1��ӷ�q� �&���?J��g���Em����}��=&�'�9�K�c&�����*h�]��G��/P}vh��7&ѯ��A.��9.]�S�KV�!��g��w\�\n�Fd�����^�����J>:l��`����:��%�Lh�I��玹-���ͣ`���>O��q��i����
���PҸ�3#��ך��0�3���2ew<��}�W���~�|x�iJ�{�$&�c!%�������%�[k� � 5{}�e�X=��A��bSo���WQ��w��!���
r�s�Q���JS�������@�E���9�&X�(
��$���N��^�պ�<r�D<;�c�LM�B��x~UW��a�~����cH�����z���(B	�������)u<N1�M��d���T��G\.=R��a9�������OV�IϚ2ȯ�i��	l�~� ��pA�/,�Z\_Ӂ�0�M2:�:���4�\y�.I��9jæ��w�W �l�Fl��𚭅'l@��3���/�*�P�)l�B!�l���ו�rWV��l�ի�9���5�_��i"�f�+��K/���ƍ)/���fUm�7�F�Z�q���=�<&a���V��5������f{Ɂ���ƾ�5��2-�ͪ�_ w����n��51��¨�Y�]�@��`��������B�����0�ϧ���u���N��P�g悵JZ-��7#XR�b`�>�8�G��,Y\�9Ǆ3?�	S��	��1�FGW�A�K��Y�&a-���WJ�-@�\��"z�bť�R�t�O9�#}K�篒��ѼMa���~z��0�����f��@a����*;64_��;}��d�0���@�C�g<�!?�,F-BkpƼ�2qc��D$��ϳ����<��)����=����kl�=�jd��4�ù�R�3R��:��"h�wvF��V�%h��og�{:���?m#�sVՈ�2�����Rc�A�8������GK��a��~cd�gOkֿ\��"���x.�5��͢i2E��֜��=?87O�	�,
K�ë��!��~���q0+}.m�_�1	u~_دO}���3Z��t��7����#/����ª��(7w�( ��Qi!b�������y���K�����8a���jQ#)2=6��df�pK�VϘ�+�V�?��'欅T�>L��9!T)��-Y.�	2Ă����ޙD&Ď���5K<��줠AeIB��� ��    ����cyh}Fh�e6�aI��?~�������      K      x������ � �      Q      x������ � �      L      x������ � �     