PGDMP     	    -                 |            BS1    15.6    15.6 /    .           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            /           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            0           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            1           1262    24890    BS1    DATABASE     {   CREATE DATABASE "BS1" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE "BS1";
                postgres    false            �            1259    24891 	   articulos    TABLE       CREATE TABLE public.articulos (
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
       public         heap    postgres    false            �            1259    24896    articulos_id_articulo_seq    SEQUENCE     �   CREATE SEQUENCE public.articulos_id_articulo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.articulos_id_articulo_seq;
       public          postgres    false    214            2           0    0    articulos_id_articulo_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.articulos_id_articulo_seq OWNED BY public.articulos.id_articulo;
          public          postgres    false    215            �            1259    24897 
   categorias    TABLE     \   CREATE TABLE public.categorias (
    id_categoria integer NOT NULL,
    descripcion text
);
    DROP TABLE public.categorias;
       public         heap    postgres    false            �            1259    24902    categorias_id_categoria_seq    SEQUENCE     �   CREATE SEQUENCE public.categorias_id_categoria_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.categorias_id_categoria_seq;
       public          postgres    false    216            3           0    0    categorias_id_categoria_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.categorias_id_categoria_seq OWNED BY public.categorias.id_categoria;
          public          postgres    false    217            �            1259    24903 	   det_venta    TABLE     �   CREATE TABLE public.det_venta (
    id_det integer NOT NULL,
    id_articulo integer,
    id_venta integer,
    cantidad integer,
    precio_unit numeric(15,2),
    precio_total numeric(15,2),
    total_reg numeric(15,2)
);
    DROP TABLE public.det_venta;
       public         heap    postgres    false            �            1259    24906    det_venta_id_det_seq    SEQUENCE     �   CREATE SEQUENCE public.det_venta_id_det_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.det_venta_id_det_seq;
       public          postgres    false    218            4           0    0    det_venta_id_det_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.det_venta_id_det_seq OWNED BY public.det_venta.id_det;
          public          postgres    false    219            �            1259    24907    rol    TABLE     c   CREATE TABLE public.rol (
    id_rol integer NOT NULL,
    descripcion text,
    estado boolean
);
    DROP TABLE public.rol;
       public         heap    postgres    false            �            1259    24912    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    id_usuario integer NOT NULL,
    id_rol integer,
    nombre text,
    direccion text,
    correo text,
    telefono numeric(11,0),
    no_doc numeric(11,0),
    ciudad text
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    24917    usuarios_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.usuarios_id_usuario_seq;
       public          postgres    false    221            5           0    0    usuarios_id_usuario_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.usuarios_id_usuario_seq OWNED BY public.usuarios.id_usuario;
          public          postgres    false    222            �            1259    24918    ventas    TABLE     �   CREATE TABLE public.ventas (
    id_venta integer NOT NULL,
    precio numeric(15,2),
    fecha date,
    vr_total numeric(15,2),
    id_usuario integer
);
    DROP TABLE public.ventas;
       public         heap    postgres    false            �            1259    24921    ventas_id_venta_seq    SEQUENCE     �   CREATE SEQUENCE public.ventas_id_venta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.ventas_id_venta_seq;
       public          postgres    false    223            6           0    0    ventas_id_venta_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.ventas_id_venta_seq OWNED BY public.ventas.id_venta;
          public          postgres    false    224            }           2604    24922    articulos id_articulo    DEFAULT     ~   ALTER TABLE ONLY public.articulos ALTER COLUMN id_articulo SET DEFAULT nextval('public.articulos_id_articulo_seq'::regclass);
 D   ALTER TABLE public.articulos ALTER COLUMN id_articulo DROP DEFAULT;
       public          postgres    false    215    214            ~           2604    24923    categorias id_categoria    DEFAULT     �   ALTER TABLE ONLY public.categorias ALTER COLUMN id_categoria SET DEFAULT nextval('public.categorias_id_categoria_seq'::regclass);
 F   ALTER TABLE public.categorias ALTER COLUMN id_categoria DROP DEFAULT;
       public          postgres    false    217    216                       2604    24924    det_venta id_det    DEFAULT     t   ALTER TABLE ONLY public.det_venta ALTER COLUMN id_det SET DEFAULT nextval('public.det_venta_id_det_seq'::regclass);
 ?   ALTER TABLE public.det_venta ALTER COLUMN id_det DROP DEFAULT;
       public          postgres    false    219    218            �           2604    24925    usuarios id_usuario    DEFAULT     z   ALTER TABLE ONLY public.usuarios ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuarios_id_usuario_seq'::regclass);
 B   ALTER TABLE public.usuarios ALTER COLUMN id_usuario DROP DEFAULT;
       public          postgres    false    222    221            �           2604    24926    ventas id_venta    DEFAULT     r   ALTER TABLE ONLY public.ventas ALTER COLUMN id_venta SET DEFAULT nextval('public.ventas_id_venta_seq'::regclass);
 >   ALTER TABLE public.ventas ALTER COLUMN id_venta DROP DEFAULT;
       public          postgres    false    224    223            !          0    24891 	   articulos 
   TABLE DATA           �   COPY public.articulos (id_articulo, nombre, impuesto, descuento, margen, stock, costo, url_img, id_categoria, segunda_desc) FROM stdin;
    public          postgres    false    214   K6       #          0    24897 
   categorias 
   TABLE DATA           ?   COPY public.categorias (id_categoria, descripcion) FROM stdin;
    public          postgres    false    216   �@       %          0    24903 	   det_venta 
   TABLE DATA           r   COPY public.det_venta (id_det, id_articulo, id_venta, cantidad, precio_unit, precio_total, total_reg) FROM stdin;
    public          postgres    false    218   #A       '          0    24907    rol 
   TABLE DATA           :   COPY public.rol (id_rol, descripcion, estado) FROM stdin;
    public          postgres    false    220   @A       (          0    24912    usuarios 
   TABLE DATA           k   COPY public.usuarios (id_usuario, id_rol, nombre, direccion, correo, telefono, no_doc, ciudad) FROM stdin;
    public          postgres    false    221   yA       *          0    24918    ventas 
   TABLE DATA           O   COPY public.ventas (id_venta, precio, fecha, vr_total, id_usuario) FROM stdin;
    public          postgres    false    223   D       7           0    0    articulos_id_articulo_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.articulos_id_articulo_seq', 1, false);
          public          postgres    false    215            8           0    0    categorias_id_categoria_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.categorias_id_categoria_seq', 1, false);
          public          postgres    false    217            9           0    0    det_venta_id_det_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.det_venta_id_det_seq', 1, false);
          public          postgres    false    219            :           0    0    usuarios_id_usuario_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.usuarios_id_usuario_seq', 1, false);
          public          postgres    false    222            ;           0    0    ventas_id_venta_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.ventas_id_venta_seq', 1, false);
          public          postgres    false    224            �           2606    24928    articulos articulos_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.articulos
    ADD CONSTRAINT articulos_pkey PRIMARY KEY (id_articulo);
 B   ALTER TABLE ONLY public.articulos DROP CONSTRAINT articulos_pkey;
       public            postgres    false    214            �           2606    24930    categorias categorias_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_pkey PRIMARY KEY (id_categoria);
 D   ALTER TABLE ONLY public.categorias DROP CONSTRAINT categorias_pkey;
       public            postgres    false    216            �           2606    24932    det_venta det_venta_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.det_venta
    ADD CONSTRAINT det_venta_pkey PRIMARY KEY (id_det);
 B   ALTER TABLE ONLY public.det_venta DROP CONSTRAINT det_venta_pkey;
       public            postgres    false    218            �           2606    24934    rol rol_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.rol
    ADD CONSTRAINT rol_pkey PRIMARY KEY (id_rol);
 6   ALTER TABLE ONLY public.rol DROP CONSTRAINT rol_pkey;
       public            postgres    false    220            �           2606    24936    usuarios usuarios_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id_usuario);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    221            �           2606    24938    ventas ventas_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.ventas
    ADD CONSTRAINT ventas_pkey PRIMARY KEY (id_venta);
 <   ALTER TABLE ONLY public.ventas DROP CONSTRAINT ventas_pkey;
       public            postgres    false    223            �           2606    24939 %   articulos articulos_id_categoria_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.articulos
    ADD CONSTRAINT articulos_id_categoria_fkey FOREIGN KEY (id_categoria) REFERENCES public.categorias(id_categoria) NOT VALID;
 O   ALTER TABLE ONLY public.articulos DROP CONSTRAINT articulos_id_categoria_fkey;
       public          postgres    false    216    3205    214            �           2606    24944 $   det_venta det_venta_id_articulo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.det_venta
    ADD CONSTRAINT det_venta_id_articulo_fkey FOREIGN KEY (id_articulo) REFERENCES public.articulos(id_articulo) NOT VALID;
 N   ALTER TABLE ONLY public.det_venta DROP CONSTRAINT det_venta_id_articulo_fkey;
       public          postgres    false    214    3203    218            �           2606    24949 !   det_venta det_venta_id_venta_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.det_venta
    ADD CONSTRAINT det_venta_id_venta_fkey FOREIGN KEY (id_venta) REFERENCES public.ventas(id_venta);
 K   ALTER TABLE ONLY public.det_venta DROP CONSTRAINT det_venta_id_venta_fkey;
       public          postgres    false    218    3213    223            �           2606    24954    usuarios usuarios_id_rol_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_id_rol_fkey FOREIGN KEY (id_rol) REFERENCES public.rol(id_rol) NOT VALID;
 G   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_id_rol_fkey;
       public          postgres    false    220    3209    221            �           2606    24959    ventas ventas_id_usuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ventas
    ADD CONSTRAINT ventas_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id_usuario);
 G   ALTER TABLE ONLY public.ventas DROP CONSTRAINT ventas_id_usuario_fkey;
       public          postgres    false    223    3211    221            !   �
  x�՚�vۺ���S`�QY��֙�8�k5i���͠��d8$��n��0���z�� E��"yu5�� 6>�{�e �Hd����*���?���x��]�8e���h8����}��G�#��F��,K͟f�0����t�c~��o3T|�j�A�.,4v�W�W�c~�j2=���h4>��b2�I�b0S`°<�l�av+�Y�g2bK�A��D�	J#�����k�D2��=�,R�aj���&^�&��}��U΂��ZQx��2�����'-b��L�6��S�jf2�\�J��W����N˅���Z��}K��a�E�]+�G.#|w��&��5n��Y�p�bX"�*He���-��P�<Ēp�ƪ���y�5-���e�J���s�g�����1�D�V��c�\�LN��Gp�zh1�(�\��~��v���1�0����lu䑲ӟ#�n�7�D���>�35>���25^3UN�MU}���N��Kk�B9_���q�e�+�0�wh]�C)݄�D��ܤ"1�PDt��Y߮��w�'O�`�P�}���w ���
|xu��m<읰���mڷ<1���S;�91�t�*ay+|"�������]���q��Q��;N�āLBi�W�DnE��Y^�ZЇ{�>~T�5��#��-I�������z��s`�'��6N7�#�"��=�6���*ε�E�m�1n�G�b�R�l%Ш6�:��2��B�Xdz��H*$gwi��0���j+?N��	�/n��Oeh���߉8�8�y��߀6A�#Ј�<m��JCe6شj#7�ct���������7������.��ގ��6��v88݉P�H�������;	�s�k�f�@�X 7J'�G	���Ҡ��`C9��D3#~#�]� ��I �tS 	�)Rn�z����g�w�B��r
�,p<�`�Uw�`��D��L�������#��?IS��~��T� L5�;�`�����3�Va*���g�&o�Ɏ��n�W������a��m�K\�L�Ph\r.��&&���%���MPTt!ׄ�VI��%�?�ES��@)U�ƯP�!���Щs��]`2�~�d���p�EX�\��)XVL}�� ��!t�ʯ��u�v��d]F�V3���v�ԃ̎����E���J�J�|�G��aK�҈g|�4�vP��`e�MG����Ĥ��US�ĕ�(�jk�AF?c��Z;�2ş8e���eP�8��-՚ey���D��O7� <inf��Vxk3���k��zƱ��2���bD6mJ~x�fԹ�,w_�t:�Ϡ�_1�GH��*)�,���n�Hup�ˢmS!߮�4z�����E�"�[����/�����cᑳ	�2�ڋP����4^1:����vʖ���ʦgO�(T��ߐ�)m/��mO�ļ�|�پ��l:������%��x�`ৢ�(l#FE��U�����w�z�D�:4k��ꁌ��r����-���j�㏮Ә���T�m~���w����b�N}�������z����h�zj��S(ǃ�S�������Bx|�
�ܵr�('�(�������)'P���la�Z�*�E��K�V)�mv!�e7F����`��è=�mRX�SO��v�����_; ��!�N�� RC�6��ȹ�Ze;�����i�n��|(�	���.�m��l
\+���w�t��$"E
4�u<�ɮ�7vz��c�u�s�=�j=�'V3-j�iXe�AbO�2Hk{O�0 �d�/�ٿ���Zv�z�p�NcP�{��~{��>�%ܺ�[ں5�����L�KҲ�T�,�񤇶s��z.�o�<��&r��������;��c3u�i�jl�9����)��'Y�8�~�׽=�((JVg���-����y�ll���4R�3��b��a�J3�SU8}����6��Zc���N_��c��b
�p��s9[*=R�z�Ζ&��2J�(m�qe7P�qUM[���RT<n|T����퍻<�H����"��2m����h'�R�`���z���k^�Z?|z�Qn�u/_��6�P���`*� g���U�]Og�~���|����k�֗���nE�u��(��޻����,�U��Q�{�������`���s��
�+���k���X�z�?��!���#4D�B]�W�]�l�䜍���(�w��׆��m��k�ǯoZ�UY��M^_���.߂!��	��E-�R���=���A!��	�T�O:勚�P ��	�s�7h��$sC�Lc��4�z���ݷ�G��P�A�р4������I�Ta��v/$����Лk��k\�v�xf��B��X{�pN�m^��\�(uxݗ�?�	�m��s�l?"�Y����o�����K�'��lm�,��e��	(�n��1�]��r��¹��{ۖ|�m������K��������� Р����3Z_G;y��©�B5�6N�k;�/�a>V��k��S�"���.���I Ch�Zy�V�/�i���#o��d@���oşگ�LH[�o�<M��R�!��~�&o�e��
끾������{O�ԧ(wPG��D@;V�������fY{�ľ_\ȄTl����f�_O@����l��<ğ���U��e��������r}      #   (   x�3����+I<�1�ˈ3�()1/�˘3��$�+F��� ��	A      %      x������ � �      '   )   x�3�tL����,.)JL�/�,�2�t��L�+I�c���� �j
A      (   �  x�]�Ao�0�������,����
t�6�C�����(u�@v��~�Ӥ��>�GR @,R�F~�C���؈kJ)$�rf1W^<�j�����jK��Z�[�Q[�΢ XX�Q��A�6&ʐ�o��}�vA^�)�ԝ�A��̘EJl���>��#��\2�Z��akP����'��7�6T����3��\#�)��[NAE	���AP��ż�Rx�_C;�i���+s�:H��L�܀����8;!8c��ھ����(��xI��dZy��+��)85`
6�i�� hu	a�+ ���6�`i�R0��0�'J�g�n�vo.`��29�x�j���䜔h��myw�=5}�U+ǰ:������` h��#���g�p:n��5�����s�<�ϛU���/^���?���=������{]L'������@#_@�j{�J�?�����h��S�����ꜷ}��Q��D{�R@5t^�4Oڼ��|�C���د%KV!���dY�`��'��n��i2�D�ƽ�`
�Kq�Pױ� ��{��|:�Ɏ�6��?Pc8���=Wu����={����l�3Z�H[Z��2�!.�_����!X��XO�&4�P�����z�` ��EPf��kW��=�p��WY����L      *      x������ � �     